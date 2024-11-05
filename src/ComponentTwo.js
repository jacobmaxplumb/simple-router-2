import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { ComponentThree } from "./ComponentThree";
import { ComponentFour } from "./ComponentFour";

export const ComponentTwo = () => {
  const navigate = useNavigate();
  const { value } = useParams();
  return (
    <>
      <h3>{value}</h3>
      <button onClick={() => navigate('three')}>Three</button>
      <button onClick={() => navigate('four')}>Four</button>
      <Routes>
        <Route path="/three" element={<ComponentThree />} />
        <Route path="/four" element={<ComponentFour />} />
      </Routes>
    </>
  );
};
