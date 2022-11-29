import api from "utils/api";
import { Launches, LaunchQuery } from "types";

type GetLaunchesParams = {
  skip: number;
  limit: number;
  query: LaunchQuery;
};

type GetLaunchesResp = {
  nextPage: number;
  list: Launches;
};

export const getLaunches = ({
  skip,
  limit,
  query,
}: GetLaunchesParams): Promise<GetLaunchesResp> => {
  const validQuery: Partial<LaunchQuery> = {};
  for (let prop in query) {
    if (query[prop as keyof LaunchQuery]) {
      validQuery[prop as keyof LaunchQuery] = query[prop as keyof LaunchQuery];
    }
  }
  return api
    .post("/launches/query", {
      query: validQuery,
      options: {
        limit,
        offset: skip,
        populate: "rocket",
      },
    })
    .then((res: any) => ({ list: res.docs, nextPage: res.nextPage }));
};
