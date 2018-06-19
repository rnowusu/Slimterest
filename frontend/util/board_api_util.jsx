export const createBoard = (board) => {
  return $.ajax({
    method: "POST",
    url: `api/users/${board.user_id}/boards`,
    data: board
  });
};


export const fetchBoard = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/boards/${id}`
  });
};

export const fetchBoards = () => {
  return $.ajax({
    method: "GET",
    url: `api/boards`
  });
}
