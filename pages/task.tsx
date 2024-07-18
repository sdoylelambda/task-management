import React, { useEffect, useState } from 'react';
import { useFormik, Field, FormikProvider } from 'formik';
import * as Yup from 'yup';
import Layout from "../components/Layout";

const Task: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const formik = useFormik({
    initialValues: {
      task: '',
      description: '',
      category: '',
    },
    validationSchema: Yup.object({
      task: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      category: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      // Handle task submission logic here
      console.log('Task submitted:', values);
    },
  });

  if (!isMounted) {
    return null;
  }

  return (
    <Layout title="New Task | Next.js + TypeScript Example">
      <div className="task-container">
        <h2>New Task</h2>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="task">Task Name</label>
              <input
                id="task"
                type="text"
                {...formik.getFieldProps('task')}
              />
              {formik.touched.task && formik.errors.task ? (
                <div className="error">{formik.errors.task}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                id="description"
                type="text"
                {...formik.getFieldProps('description')}
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <Field as="select" id="category" name="category">
                <option value="" label="Select a category" />
                <option value="family-friends" label="Family & Friends" />
                <option value="romance" label="Significant Other/Romance" />
                <option value="fun-recreation" label="Fun & Recreation" />
                <option value="health" label="Health" />
                <option value="money" label="Money" />
                <option value="personal-growth" label="Personal Growth" />
                <option value="physical-environment" label="Physical Environment" />
                <option value="career" label="Career" />
              </Field>
              {formik.touched.category && formik.errors.category ? (
                <div className="error">{formik.errors.category}</div>
              ) : null}
            </div>
            <button type="submit">Create Task</button>
          </form>
        </FormikProvider>
      </div>
    </Layout>
  );
};

export default Task;
