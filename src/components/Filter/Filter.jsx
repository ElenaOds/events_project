import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

import { Input } from './Filter.styled'

const Filter = ({ placeholder }) => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter.filter);
  
    const handleChange = (e) => {
        dispatch(setFilter(e.target.value));
    }
    return (
    <>
       <Input
        onChange={handleChange}
        value={filter}
        placeholder={placeholder}
      >
      </Input>
    </>
  )
}

export default Filter;
