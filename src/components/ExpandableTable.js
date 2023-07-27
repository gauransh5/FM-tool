import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import "./ExpandableTable.css";

export default function ExpandableTable(props) {
  const { jiraItems } = props;

  function Row(props) {
    const { item } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow
          className={`parentRow ${open ? "open" : "closed"}`}
          sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            {item.children && (
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            )}
          </TableCell>
          <TableCell className="itemIDCell" component="th" scope="row">
            {item.id}
          </TableCell>
          <TableCell
            className="itemNameCell"
            sx={{ verticalAlign: "left", minWidth: 150 }}>
            <div>{item.name}</div>
          </TableCell>
          <TableCell className="itemTypeCell">{item.itemType}</TableCell>
          <TableCell className="statusInJiraCell">
            {item.statusInJira}
          </TableCell>
          <TableCell className="releaseMethodCell">
            {item.releaseMethod}
          </TableCell>
          <TableCell className="statusOnEnvCell">
            {item.deployedToEnv.length > 0
              ? item.deployedToEnv[0].releaseStatus
              : ""}
          </TableCell>
        </TableRow>
        {item.children && (
          <TableRow className="childRow">
            <TableCell
              style={{ paddingBottom: 0, paddingTop: 0 }}
              colSpan={7}
              sx={{
                verticalAlign: "middle",
                borderBottom: "unset", // Remove child row's bottom border
              }}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Table size="small" aria-label="purchases">
                    <TableBody>
                      {item.children.map((child) => (
                        <Row key={child.id} item={child} />
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        )}
      </React.Fragment>
    );
  }

  return (
    <div>
      <div className="sub-heading">
        <h1 className="mb-3">Feature Management Tool</h1>
      </div>
      <div style={{ overflowX: "auto" }}>
        <TableContainer
          component={Paper}
          sx={{ minWidth: 800, tableLayout: "fixed" }}
          className="rootTable">
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell className="itemIDHeader">Item ID</TableCell>
                <TableCell className="itemNameHeader">Item Name</TableCell>
                <TableCell className="itemTypeHeader">Item type</TableCell>
                <TableCell className="statusInJiraHeader">
                  Status in Jira
                </TableCell>
                <TableCell className="releaseMethodHeader">
                  Release Method
                </TableCell>
                <TableCell className="statusOnEnvHeader">
                  Status on Environment
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jiraItems.map((item) => (
                <Row key={item.id} item={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
