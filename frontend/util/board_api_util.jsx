export const createBoard = (board) => {
  return $.ajax({
    method: "POST",
    url: `api/users/${currentUser.id}/boards`,
    data: board
  });
};


export const fetchBoard = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${currentUser.id}/boards/${id}`
  });
};

export const fetchBoards = () => {
  return $.ajax({
    method: "GET",
    url: `api/boards`
  });
}
