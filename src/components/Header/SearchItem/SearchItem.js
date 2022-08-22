import './SearchItem.scss';

function SearchItem({ title, day, month }) {
    return (
        <li className='search__container'>
            <h4 className='search__title'>{title}</h4>
            <p className='search__text'>{day} {month}</p>
        </li>
    );
}

export default SearchItem;