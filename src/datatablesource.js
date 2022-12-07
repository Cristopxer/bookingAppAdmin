export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://imgs.search.brave.com/qJkLiO4izHv4Fj6hBAUbu_AbgxjLRQJ0yJx0opS4W5M/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/QnJveEpla2EwSmo4/MXV3OWcyUHdBSGFI/YSZwaWQ9QXBp"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "country",
    headerName: "Country",
    width: 230,
  },

  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 300 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },

  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 300,
  },
  {
    field: "city",
    headerName: "City  ",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 300 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },

  {
    field: "desc",
    headerName: "Description",
    width: 300,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];