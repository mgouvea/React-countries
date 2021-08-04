import React, { useState } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';
import Countries from '../components/Countries';
import Country from '../components/Country';

import { allCountries } from '../data/Countries';

export default function ReactCountriesPages() {
  const [countryFilter, setCountryFilter] = useState('');
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleCountryChange = (newCountry) => {
    setCountryFilter(newCountry);
  };

  const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
    countryFilterLowerCase.length >= 3
      ? allCountries.filter(({ nameLowerCase }) =>
          nameLowerCase.toLocaleLowerCase().includes(countryFilterLowerCase)
        )
      : allCountries;

  const toggleVisitedCountry = (countryId) => {
    let newVisitedCountries = [...visitedCountry];

    const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1;
    if (isCountryVisited) {
      newVisitedCountries = newVisitedCountries.filter((visitedCountryId) => {
        return visitedCountryId !== countryId;
      });
    } else {
      newVisitedCountries.push(countryId);
    }

    setVisitedCountry(newVisitedCountries);
  };

  return (
    <div>
      <Header sizeF="large">React Countries</Header>
      <Main>
        <TextInput
          labelDescription="Nome do País"
          placeholderDescription="País"
          id="inputCountryFilter"
          inputValue={countryFilter}
          onInputChange={handleCountryChange}
        />
        {/* <Countries
          visitedCountry={visitedCountry}
          onCountryClick={toggleVisitedCountry}
        >
          {filteredCountries}
        </Countries> */}

        <Countries>
          <h2 className="text-center font-semibold">
            {filteredCountries.length} país(es)
          </h2>
          <h3 className="text-center font-semibold">
            {visitedCountry.length} país(es) visitados
          </h3>
          {filteredCountries.map((country) => {
            const isVisited = visitedCountry.indexOf(country.id) !== -1;

            return (
              <Country
                isVisited={isVisited}
                key={country.id}
                onCountryClick={toggleVisitedCountry}
              >
                {country}
              </Country>
            );
          })}
        </Countries>
      </Main>
    </div>
  );
}
