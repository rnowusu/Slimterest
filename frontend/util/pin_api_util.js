export const fetchPins = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pins"
  });
};

export const fetchPin = (id) => {
  return $.ajax({
    method: "GET",
    url:`/api/users/${currentUser.id}/pins/${id}`
  });
};

export const createPin = (pin) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${currentUser.id}/pins`,
    data: { pin }
  });
};
