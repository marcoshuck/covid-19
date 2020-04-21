export interface Summary {
  newConfirmed: number;
  totalConfirmed: number;
  newDeaths: number;
  totalDeaths: number;
  newRecovered: number;
  totalRecovered: number;
}

export function mapper(data: any): Summary {
  return {
    newConfirmed: data.NewConfirmed,
    newDeaths: data.NewDeaths,
    newRecovered: data.NewRecovered,
    totalConfirmed: data.TotalConfirmed,
    totalDeaths: data.TotalDeaths,
    totalRecovered: data.TotalRecovered,
  };
}
