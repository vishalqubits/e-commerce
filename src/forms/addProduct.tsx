import { Button, Label } from "flowbite-react";
import { Formik, Form, Field } from "formik";
import { object, string } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const addProudctFormSchema = object({
  title: string({
    required_error: "*Please enter a title",
  }),
  price: string({
    required_error: "*Please enter an price",
  }),
  description: string({
    required_error: "*Please enter description",
  }),
  image: string({
    required_error: "*Image is required",
  }),
  category: string({
    required_error: "*Category is required",
  }),
});

export type TProduct = {
  id?: string;
  title?: string;
  price?: string;
  description?: string;
  image?: string;
  category?: string;
};

const AddProductForm = ({
  id,
  title,
  price,
  description,
  image,
  category,
}: TProduct) => {
  return (
    <>
      <Formik
        initialValues={{
          title: id ? title : "",
          price: id ? price : "",
          description: id ? description : "",
          image: id ? image : "",
          category: id ? category : "",
        }}
        onSubmit={async (values, { resetForm }) => {
          alert("Form is submitted. Thank You !!");

          try {
            if (id) {
              const productResponse = await fetch(
                `https://fakestoreapi.com/products/${Number(id)}`,
                {
                  method: "PUT",
                  body: JSON.stringify({
                    title: values.title,
                    price: Number(values.price),
                    description: values.description,
                    image: values.image,
                    category: values.category,
                  }),
                }
              );

              if (productResponse.ok) {
                const data = await productResponse.json();
                console.log("Data updated successfully", data);
                resetForm();
              } else {
                throw new Error("Error while updating product");
              }
            } else {
              const productResponse = await fetch(
                "https://fakestoreapi.com/products",
                {
                  method: "POST",
                  body: JSON.stringify({
                    title: values.title,
                    price: Number(values.price),
                    description: values.description,
                    image: values.image,
                    category: values.category,
                  }),
                }
              );

              if (productResponse.ok) {
                const data = await productResponse.json();
                console.log("Data added successfully", data);
                resetForm();
              } else {
                throw new Error("Error while adding product");
              }
            }
          } catch (error) {
            console.log(error);
          }
        }}
        validationSchema={toFormikValidationSchema(addProudctFormSchema)}
      >
        {(formikSate) => {
          const errors = formikSate.errors;

          return (
            <Form>
              <div>
                <div>
                  <Label value="Title" className="text-md font-semibold" />
                </div>

                <div className="my-2">
                  <Field
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    className="rounded-lg w-full"
                  />
                  {!!errors.title && (
                    <div className="text-red-500 pt-2">{errors.title}</div>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <Label value="Price" className="text-md font-semibold" />
                </div>

                <div className="my-2">
                  <Field
                    type="text"
                    name="price"
                    placeholder="Enter price"
                    className="rounded-lg w-full"
                  />
                  {!!errors.price && (
                    <div className="text-red-500 pt-2">{errors.title}</div>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <Label
                    value="Description"
                    className="text-md font-semibold"
                  />
                </div>

                <div className="my-2">
                  <Field
                    type="text"
                    name="description"
                    placeholder="Enter description"
                    className="rounded-lg w-full"
                  />
                  {!!errors.price && (
                    <div className="text-red-500 pt-2">
                      {errors.description}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <Label value="Image" className="text-md font-semibold" />
                </div>

                <div className="my-2">
                  <Field
                    type="text"
                    name="image"
                    placeholder="Enter image"
                    className="rounded-lg w-full"
                  />
                  {!!errors.image && (
                    <div className="text-red-500 pt-2">{errors.image}</div>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <Label value="Category" className="text-md font-semibold" />
                </div>

                <div className="my-2">
                  <Field
                    type="text"
                    name="category"
                    placeholder="Enter category"
                    className="rounded-lg w-full"
                  />
                  {!!errors.category && (
                    <div className="text-red-500 pt-2">{errors.category}</div>
                  )}
                </div>
              </div>

              <div className="pt-6">
                <Button color="dark" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default AddProductForm;
