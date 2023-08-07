import axios from "axios";
import { useQuery } from "react-query";

const fetchUserByEmail = (emailid) => {
  return axios.get(`http://localhost:4000/users/${emailid}`);
};
const fetchCourseByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};
function DependentQueries({ emailid }) {
  const { data: user } = useQuery(["user", emailid], () =>
    fetchUserByEmail(emailid)
  );

  const channelId = user?.data.channelId;

  useQuery(["courses", channelId], () => fetchCourseByChannelId(channelId));

  return <div>DependentQueries</div>;
}

export default DependentQueries;
