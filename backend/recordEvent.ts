import axios from "axios";

export const recordPageView = async (fp: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/event?event_name=impression&event_type=page_view&visitor_id=${fp}`,
      {
        headers: {
          "X-Current-URL": window.location.href,
          "X-Current-Path": window.location.pathname,
        },
      }
    );
    if (res.status !== 200) {
      return null;
    }
    return res.data.data;
  } catch (error) {
    return null;
  }
};

export const recordClickEvent = async (fp: string, data: any) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/event?event_name=click&event_type=checkout&visitor_id=${fp}`,
      data,
      {
        headers: {
          "X-Current-URL": window.location.href,
          "X-Current-Path": window.location.pathname,
        },
      }
    );
    if (res.status !== 200) {
      return null;
    }
    return res.data.data;
  } catch (error) {
    return null;
  }
};
