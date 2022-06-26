import React from "react";
import { useFormikContext } from "formik";


import ImageInputList from "../ImageInputList";
import AppErrorMessage from "./AppErrorMessage";

interface IProps {
    name: string;
}

const AppFormImagePicker:React.FC<IProps> = ({ name }) =>  {
  const { errors, setFieldValue, touched, values }:any = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri:string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri:string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri:string) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <AppErrorMessage errorMessage={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormImagePicker;
