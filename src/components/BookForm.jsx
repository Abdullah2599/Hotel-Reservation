import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CheckIn from './CheckIn';
import CheckOut from './CheckOut';
import AdultDropdown from './AdultDropdown';
import KidsDropdown from './KidsDropdown';
import { startOfDay } from 'date-fns';
import { useAppContext } from '../App';
import { apiService } from '../services/Apiservice';
import { useNavigate } from 'react-router-dom';

function BookForm() {
  const router = useNavigate();
  const { rooms, setRooms } = useAppContext();
  const [ loading, setLoading ] = useState(false);
  const formik = useFormik({
    initialValues: {
      checkInDate: new Date(),
      checkOutDate: null,
      adults: 1,
      kids: ''
    },
    validationSchema: Yup.object({
      checkInDate: Yup.date()
        .required('Check-in date is required')
        .min(startOfDay(new Date()), 'Check-in date must be today or in the future'), 
      checkOutDate: Yup.date()
        .min(Yup.ref('checkInDate'), 'Check-out date must be later than check-in date')
        .required('Check-out date is required'),
      adults: Yup.number().min(1, 'At least 1 adult is required').required('Adults are required'),
      kids: Yup.number().min(0, 'Invalid number of kids').optional()
    }),
    onSubmit: async (values) => {
      if(loading) return;
      const { checkInDate, checkOutDate, adults, kids } = values;
      const person = adults + kids;
      const valid_from = new Date(checkInDate).toISOString();
      const valid_to = new Date(checkOutDate).toISOString();
      const bookingData = { valid_from, valid_to, person };
      console.log(bookingData);
      try {
        setLoading(true);
        const response = await apiService.postData(`room/listbyfilter`, bookingData);
       // setRooms(response);
        localStorage.setItem('rooms', JSON.stringify(response));
        console.log('Updated rooms:', rooms);
        console.log(response);
       // formik.resetForm();
        router('/rooms');
      } catch (error) {
        console.error('Error fetching room data:', error);
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className='h-[300px] w-full lg:h-[70px]'>
      <div className='flex flex-col w-full h-full lg:flex-row'>
        <div className='flex-1 border-r'>
          <CheckIn
            startDate={formik.values.checkInDate}
            setStartDate={(date) => formik.setFieldValue('checkInDate', date)} 
          />
          {formik.touched.checkInDate && formik.errors.checkInDate ? (
            <div className="text-red-500">{formik.errors.checkInDate}</div>
          ) : null}
        </div>

        <div className='flex-1 border-r'>
          <CheckOut
            endDate={formik.values.checkOutDate}
            setEndDate={(date) => formik.setFieldValue('checkOutDate', date)} 
          />
          {formik.touched.checkOutDate && formik.errors.checkOutDate ? (
            <div className="text-red-500">{formik.errors.checkOutDate}</div>
          ) : null}
        </div>

        <div className='flex-1 border-r'>
          <AdultDropdown
            value={formik.values.adults}
            setValue={(value) => formik.setFieldValue('adults', value)}
          />
          {formik.touched.adults && formik.errors.adults ? (
            <div className="text-red-500">{formik.errors.adults}</div>
          ) : null}
        </div>

        <div className='flex-1 border-r'>
          <KidsDropdown
            value={formik.values.kids}
            setValue={(value) => formik.setFieldValue('kids', value)}
          />
          {formik.touched.kids && formik.errors.kids ? (
            <div className="text-red-500">{formik.errors.kids}</div>
          ) : null}
        </div>

        <button className='btn btn-primary' type='submit'>
          Check Now
        </button>
      </div>
    </form>
  );
}

export default BookForm;
