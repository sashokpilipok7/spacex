import api from "utils/api";
import { Launches } from "types";

type GetLaunchesParams = {
  skip: number;
  limit: number;
};

type GetLaunchesResp = {
  nextPage: number;
  list: Launches;
};

export const getLaunches = ({
  skip,
  limit,
}: GetLaunchesParams): Promise<GetLaunchesResp> => {
  return api
    .post("/launches/query", {
      options: {
        limit,
        offset: skip,
        populate: "rocket",
      },
    })
    .then((res: any) => ({ list: res.docs, nextPage: res.nextPage }));
};
