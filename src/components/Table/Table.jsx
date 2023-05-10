import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, response, date, guests) {
  return { name, response, date, guests };
}

const rows = [
  createData("Shiluva Shikwambana", "Attending", "5 / 9 / 2023", +1),
  createData("Khanani Shikwambana", "Still pending", "5 / 9 / 2023", +2),
  createData("Boitumelo Mamiane", "Attending", "5 / 9 / 2023", +1),
  createData("Andile Shibambu", "Attending", "5 / 9 / 2023", +1),
  createData("Lithi Mgwebu", "Regretted", "5 / 9 / 2023", 0),
];
const makeStyle = (response) => {
  if (response === "Attending") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (response === "Regretted") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};
export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent RSVP's</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Guest Fullname</TableCell>
              <TableCell align="left">Response</TableCell>
              <TableCell align="left">Date of response</TableCell>
              <TableCell align="left">Their guest</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">
                  <span className="response" style={makeStyle(row.response)}>
                    {row.response}
                  </span>
                </TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.guests}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
