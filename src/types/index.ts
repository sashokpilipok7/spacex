export type Launch = {
  id: string;
  name: string;
  flight_number: number;
  details: string;
  rocket: {
    id: string;
    name: string;
  };
  date_unix: number;
  date_utc: string;
  links: {
    patch: {
      small: string;
      large: string;
    };
  };
};

export type Launches = Array<Launch>;

export type LaunchesSettings = {
  skip: number;
  hasMore: boolean;
};

export type LaunchQuery = {
  name: string;
  flight_number: string;
};
