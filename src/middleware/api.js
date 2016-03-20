import ncaam2016 from 'bracket-data/browser/ncaam-2016';

export async function fetchTeamList() {
  const { regions } = ncaam2016.bracket;

  const teams = Object.keys(regions)
    .filter(regionId => regionId !== 'FF')
    .map(regionId => regions[regionId].teams)
    .reduce((a, b) => a.concat(b));

  return teams;
}

