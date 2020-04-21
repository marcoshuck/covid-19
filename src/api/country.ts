export interface Country {
  name: string;
  code: string;
  slug: string;
  newConfirmed: number;
  totalConfirmed: number;
  newDeaths: number;
  totalDeaths: number;
  newRecovered: number;
  totalRecovered: number;
  date: Date;
}

export function mapper(data: any): Country {
  return {
    code: data.CountryCode,
    date: new Date(Date.parse(data.Date)),
    name: data.Country,
    newConfirmed: data.NewConfirmed,
    newDeaths: data.NewDeaths,
    newRecovered: data.NewRecovered,
    slug: data.Slug,
    totalConfirmed: data.TotalConfirmed,
    totalDeaths: data.TotalDeaths,
    totalRecovered: data.TotalRecovered,
  };
}
