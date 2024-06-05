
import * as styled from './styled';

type Props = {
  size: number;
  positionX: number;
  positionY: number;
  results: unknown[];
}

const SearchResults = ({ results, positionY, positionX, size }: Props) => {
  return (
    <styled.DropdownWrapper
      $x={positionX}
      $y={positionY}
    >
      <styled.Dropdown
        $width={size}
      >
        <ul>
          <li>
            <a href="#">Lorem ipsum dolor sit amet consectetur</a>
          </li>
          <li>
            <a href="#">Lorem ipsum dolor </a>
          </li>
          <li>
            <a href="#">Lorem ipsum dolor sit amet consectetur</a>
          </li>
          <li>
            <a href="#">Lorem ipsum dolor </a>
          </li>
        </ul>
      </styled.Dropdown>
    </styled.DropdownWrapper>
  )
};

export {
  SearchResults
};