import { FC } from "react";
import { IErrorProps } from "../../utills/interface";
import style from "./Error.module.css";

const Error: FC<IErrorProps> = ({ error }) => {
  return <div className={style.error}>{error && <p>{error}</p>}</div>;
};

export default Error;
