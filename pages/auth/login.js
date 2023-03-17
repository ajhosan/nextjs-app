import { useFormik } from "formik"
import * as Yup from 'yup';

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .email('Invalid email address')
                .required('Please enter your email'),
            password: Yup.string()
                .required('Please enter your password')
        }),
        onSubmit: async (values) => {
            console.log(values)
        }
    })
    return (
        <div className="w-full bg-gray-400 h-screen flex items-center justify-center">
            <div className="w-[400px] min-h-[400px] p-4 bg-white rounded-xl">
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="email" className={'w-full my-4 flex flex-col space-y-4'}>
                        <span>Email</span>
                        <input type='email' name={'email'} placeholder={'input your email'} value={formik.values.email} onChange={formik.handleChange} />
                        {
                            formik.errors &&
                            formik.touched &&
                            formik.errors?.email &&
                            formik.touched.email &&
                            (
                                <span className={'!text-red-500 !text-xs'}>{formik.errors?.email}</span>
                            )
                        }
                    </label>
                    <label htmlFor="password" className={'w-full my-4 flex flex-col space-y-4'}>
                        <span>Password</span>
                        <input type='password' name={'password'} placeholder={'input your password'}></input>
                    </label>

                    <button
                        type={'submit'} className={'w-full rounded-xl !bg-blue-500 !text-white'}>Submit</button>
                </form>
            </div>
        </div>
    )
}