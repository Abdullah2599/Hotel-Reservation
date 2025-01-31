import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { apiService } from '../services/Apiservice';

const ChangePasswordModal = ({ isOpen, closeModal }) => {
    const formik = useFormik({
        initialValues: {
            password: '',
            newpassword: '',
            renewpassword: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required('Old password is required'),
            newpassword: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            renewpassword: Yup.string()
                .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        }),
        onSubmit: async (values, { setSubmitting }) => {

            console.log('Password changed:', values);
            try {
                const response = await apiService.putData('auth/editpassword', values);
                toast.success('Password changed successfully');
                setSubmitting(false);
                formik.resetForm();
                closeModal(); 
                
            } catch (error) {
                console.error('Error changing password:', error);
            }

        },
    });

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        isOpen && (
            <div
                className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50"
                onClick={handleModalClick} 
            >
                <div className="bg-white p-6 shadow-lg w-96">
                    <h2 className="text-xl font-semibold mb-4">Change Password</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium mb-1">
                                Old Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className="w-full border p-3 focus:ring-2 focus:ring-accent"
                                placeholder="Enter old password"
                            />
                            {formik.touched.password && formik.errors.password && (
                                <div className="text-red-500 text-sm">{formik.errors.password}</div>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="newpassword" className="block text-sm font-medium mb-1">
                                New Password
                            </label>
                            <input
                                id="newpassword"
                                name="newpassword"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.newpassword}
                                className="w-full border p-3 focus:ring-2 focus:ring-accent"
                                placeholder="Enter new password"
                            />
                            {formik.touched.newpassword && formik.errors.newpassword && (
                                <div className="text-red-500 text-sm">{formik.errors.newpassword}</div>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="renewpassword" className="block text-sm font-medium mb-1">
                                Confirm Password
                            </label>
                            <input
                                id="renewpassword"
                                name="renewpassword"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.renewpassword}
                                className="w-full border p-3 focus:ring-2 focus:ring-accent"
                                placeholder="Confirm your password"
                            />
                            {formik.touched.renewpassword && formik.errors.renewpassword && (
                                <div className="text-red-500 text-sm">{formik.errors.renewpassword}</div>
                            )}
                        </div>

                        <div className="flex justify-between mt-6">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="btn btn-secondary w-auto h-12 hover:bg-red-500 hover:text-white"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary w-auto h-12 hover:bg-green-500 hover:text-white"
                                disabled={formik.isSubmitting}
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
};


export default ChangePasswordModal;