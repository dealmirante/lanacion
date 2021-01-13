import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerNotasAccion } from "../redux/apiDucks";
import { NotasCard } from "./NotasCard";

export const Grilla = () => {
  const dispatch = useDispatch();
  const notas = useSelector((store) => store.Notas.array);

  useEffect(() => {
    dispatch(obtenerNotasAccion());
  }, [dispatch]);

  return (
    <div className="card-grid">
      {notas.map((item) => (
        <NotasCard key={item._id} {...item} />
      ))}
    </div>
  );
};

export default Grilla;
