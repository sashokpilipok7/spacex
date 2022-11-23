import React, { useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";

import { Launch, Launches, LaunchesSettings } from "types";
import { getLaunches } from "api/launch";
import { useDebounce } from "customHooks";
import config from "_config";

import Loader from "components/Loader";
import Preview from "components/Preview";
import Details from "components/Details";
import Filters from "components/Filters";
import Modal from "components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeLaunch, setActiveLaunch] = useState<Launch | null>(null);

  const [launches, setLaunches] = useState<Launches>([]);
  const [settings, setSettings] = useState<LaunchesSettings>({
    skip: 0,
    hasMore: true,
  });

  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    async function loadData() {
      const { list, nextPage } = await getLaunches({
        skip: 0,
        limit: config.launchesLimit,
      });
      setLaunches(list);
      setSettings({ ...settings, hasMore: !!nextPage });
    }
    loadData();
  }, []);

  const fetchData = async () => {
    const { skip } = settings;
    const newSkip = skip + config.launchesLimit;

    const { list, nextPage } = await getLaunches({
      skip: newSkip,
      limit: config.launchesLimit,
    });
    setLaunches([...launches, ...list]);
    setSettings({ skip: newSkip, hasMore: !!nextPage });
  };

  const handleModalOpen = (launch: Launch) => {
    setActiveLaunch(launch);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setActiveLaunch(null);
    setModalOpen(false);
  };

  const handleFilterChange = useDebounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value);
    },
    []
  );

  const fillteredList = useMemo(() => {
    if (!filter) {
      return launches;
    }
    return launches.filter((item) => item.rocket.name.includes(filter));
  }, [launches, filter]);

  return (
    <Wrapper>
      <Filters onChange={handleFilterChange} />
      <InfiniteScroll
        dataLength={fillteredList.length}
        next={fetchData}
        hasMore={settings.hasMore}
        loader={<Loader />}
        style={{ overflow: "hidden" }}
      >
        <Grid>
          {fillteredList.map((item) => (
            <Preview key={item.id} data={item} onClick={handleModalOpen} />
          ))}
        </Grid>
      </InfiniteScroll>
      <Modal open={modalOpen} onCancel={handleModalClose}>
        {activeLaunch && <Details data={activeLaunch} />}
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default App;
