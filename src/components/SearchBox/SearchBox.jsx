import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

const SearchBox = () => {

    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);
  
    const handleFilterChange = (filter) => dispatch(changeFilter(filter));
  
    return (
        <div className={css.searchBar}>
            <p className={css.searchHint}>Find contacts by name</p>
            <input className={css.searchInput} type="text" value={filter} onChange={(evt) => handleFilterChange(evt.target.value)} />
        </div>
  )
}

export default SearchBox