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

export const createPin = (pin, callback) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${currentUser.id}/pins`,
    contentType: false,
    processData: false,
    data: pin//,
    //success: () => callback();
  });
};
