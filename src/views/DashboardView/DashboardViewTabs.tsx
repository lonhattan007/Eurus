import { Tab } from '@headlessui/react';
import { DetailTab, HourlyForecastTab, DailyForecastTab } from './Tabs';

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
    name: 'Daily forecast',
    ref: 'daily-forecast',
    element: <DailyForecastTab />,
  },
];

const DashboardViewTabs = () => {
  return (
    <>
      <Tab.Group>
        <Tab.List>
          {tabs.map((tab) => (
            <Tab key={`${tab.ref}-tab-button`}>{tab.name}</Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {tabs.map((tab) => (
            <Tab.Panel key={`${tab.ref}-tab-panel`}>{tab.element}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export { DashboardViewTabs };
