import Select from 'react-select';
import VietnamLocations from '@constants/VietnamLocations';
import { useState } from 'react';
import { useAppDispatch } from '@hooks/customReduxHooks';
import { addLocation } from '@stores/recentLocationsSlice';
import { updateLocation } from '@stores/currentLocationSlice';

const LocationSearchBar = (props: any) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const dispatch = useAppDispatch();

  const handleLocationChange = (selectedOption: any) => {
    setSelectedLocation(selectedOption.value);
    dispatch(updateLocation(selectedOption.value));
    dispatch(addLocation(selectedOption.value));
  };

  return (
    <Select
      id={props.id}
      className='rounded'
      options={VietnamLocations}
      value={VietnamLocations.find((option) => option.value === selectedLocation)}
      onChange={handleLocationChange}
      placeholder='Search a location'
    />
  );
};

export default LocationSearchBar;
