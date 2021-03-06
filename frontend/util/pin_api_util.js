export const fetchPins = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pins"
  });
};

export const fetchPin = (id) => {
  return $.ajax({
    method: "GET",
    url:`/api/pins/${id}`
  });
};

export const createPin = (pin, callback) => {
  // debugger
  return $.ajax({
    method: "POST",
    url: `/api/users/${pin.get("pin[user_id]")}/pins`,
    contentType: false,
    processData: false,
    data: pin//,
    //success: () => callback();
    //pin.get("pin[user_id]")
  });
};

export const fetchUserPins = (id) => {
  return $.ajax({
    method: 'GET',
    url:`api/users/${id}/pins`
  });
}

export const editPin = (id) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${currentUser}/pins/${id}`
  });
};

export const deletePin = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/users/${currentUser.id}/pins/${id}`
  });
};
