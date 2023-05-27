import { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';
import { DetailTab } from './DetailTab';
import { HourlyForecastTab } from './HourlyForecastTab';
import { WeeklyForecastTab } from './WeeklyForecastTab';

const tabs = [
  {
    name: "Today's details",
    ref: 'today-details',
    element: <DetailTab />,
  },
  {
    name: 'Hourly forecast',
    ref: 'hourly-forecast',
    element: <HourlyForecastTab />,
  },
  {
    name: 'Weekly forecast',
    ref: 'weekly-forecast',
    element: <WeeklyForecastTab />,
  },
];

const DashboardViewTabs = () => {
  const [fillActive, setFillActive] = useState(
    localStorage.getItem('focusedTab') || tabs[0].ref,
  );

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
    localStorage.setItem('focusedTab', value);
  };

  return (
    <>
      <MDBTabs pills className='justify-center mb-3'>
        {tabs.map((tab) => (
          <MDBTabsItem className='w-25' key={tab.ref + '-tab-item'}>
            <MDBTabsLink
              onClick={() => handleFillClick(tab.ref)}
              active={fillActive === tab.ref}
            >
              {tab.name}
            </MDBTabsLink>
          </MDBTabsItem>
        ))}
      </MDBTabs>

      <MDBTabsContent>
        {tabs.map((tab) => (
          <MDBTabsPane
            show={fillActive === tab.ref}
            key={tab.ref + '-tab-pane'}
          >
            {tab.element}
          </MDBTabsPane>
        ))}
      </MDBTabsContent>
    </>
  );
};

export { DashboardViewTabs };
