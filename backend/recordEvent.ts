export const recordPageView = async (fp: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/event?event_name=impression&event_type=page_view&visitor_id=${fp}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Current-URL": window.location.href,
          "X-Current-Path": window.location.pathname,
        },
        // Fire and forget - don't block on analytics
        keepalive: true,
      }
    );
    if (!res.ok) {
      return null;
    }
    const result = await res.json();
    return result.data;
  } catch (error) {
    return null;
  }
};

export const recordClickEvent = async (fp: string, data: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/event?event_name=click&event_type=checkout&visitor_id=${fp}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Current-URL": window.location.href,
          "X-Current-Path": window.location.pathname,
        },
        body: JSON.stringify(data),
        keepalive: true,
      }
    );
    if (!res.ok) {
      return null;
    }
    const result = await res.json();
    return result.data;
  } catch (error) {
    return null;
  }
};
