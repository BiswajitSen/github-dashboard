import getDateInformation, { formattedDateString } from "../../utils/date";
import HashMap from "../../utils/hashMap";

export const createCommitDetails = (commits) => {
  const commitInfo = new HashMap();

  commits.forEach(({ sha, date }) => {
    const dateInfo = getDateInformation(date);
    commitInfo.add(formattedDateString(dateInfo), sha);
  });

  const labels = commitInfo.getKeys();
  const commitCountPerDate = labels.map((label) =>
    commitInfo.getValueCount(label)
  );

  return { labels, commitCountPerDate };
};
