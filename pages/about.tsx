import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Layout from "../components/Layout";

const About: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      // Handle login logic here
      console.log('Login submitted:', values);
    },
  });

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
    <div className="login-container">
      <h2>New Task</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="task">Task Name</label>
          <input
            id="task"
            type="task"
            {...formik.getFieldProps('task')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Description</label>
          <input
            id="password"
            type="password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
    </Layout>
  );
};


export default About;

