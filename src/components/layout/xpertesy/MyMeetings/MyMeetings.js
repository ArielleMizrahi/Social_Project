import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MeetingsTable from "./MeetingsTable";
import PaginationComp from "./PaginationComp";
import "./MyMeetings.css";
import searchIcon from "./magnifying-glass.svg";
import { DatePicker, TimePicker } from "antd";
import "antd/dist/antd.css";
import api from "../../../../api";

const MyMeetings = () => {
   const [tableData, setTableData] = useState([]);
   const [tableFilteredData, setTableFilteredData] = useState([]);
   const [isFiltered, setIsFiltered] = useState(false);
   const [filterForm, setFilterForm] = useState({
      fromDate: "",
      toDate: "",
      fromHour: "",
      toHour: "",
      numberOfRows: "6",
   });
   const [activePage, setActivePage] = useState(1);
   const onChangeHandler = (e) => {
      if (
         e.currentTarget.name === "numberOfRows" &&
         Number(e.currentTarget.value) < 1
      )
         return;
      setFilterForm({
         ...filterForm,
         [e.currentTarget.name]: e.currentTarget.value,
      });
   };
   const { RangePicker: DateRangePicker } = DatePicker;
   const { RangePicker: TimeRangePicker } = TimePicker;
   useEffect(() => {
      filterTableHandler();
   }, []);

   const filterTableHandler = async () => {
      const currentDate = new Date().toISOString().split("T")[0];
      const reqObj = {
         fromDate:
            filterForm.fromDate === "" ? currentDate : filterForm.fromDate,
      };
      if (filterForm.toDate !== "") reqObj.toDate = filterForm.toDate;
      const res = await api.post("/xpertesy/showrooms", reqObj);
      setTableData(res.data.Data);
   };

   const searchHandler = (e) => {
      const filtered = tableData.filter((m) =>
         m.title.includes(e.target.value)
      );
      setTableFilteredData(filtered);
      if (filtered === "") setIsFiltered(false);
      else setIsFiltered(true);
   };

   const onChangeDateHandler = (e) => {
      const currentDate = new Date().toISOString().split("T")[0];
      setFilterForm((cur) => ({
         ...cur,
         fromDate: e ? e[0]._d : currentDate,
         toDate: e ? e[1]._d : "",
      }));
   };

   return (
      <>
         <h2 className="text-right m-3">צפייה בפגישות שלי</h2>

         <Form className="p-5" dir="rtl">
            <Row className="rows">
               <Col className="d-flex col-3 section">
                  <Col className="text-center col-1 hideOnMobile">
                     <Form.Label sm="1" className="label">
                        תאריך
                     </Form.Label>
                  </Col>
                  <Col dir="ltr">
                     <DateRangePicker
                        className="range-input"
                        onChange={onChangeDateHandler}
                        placeholder={["תאריך התחלה", "תאריך סיום "]}
                     />
                  </Col>
               </Col>
               <Col className="d-flex  col-3 section">
                  <Col className="text-center col-2 hideOnMobile">
                     <Form.Label className="label">שעה</Form.Label>
                  </Col>
                  <Col dir="ltr">
                     <TimeRangePicker
                        className="range-input"
                        format={"HH:mm"}
                        onChange={(e) => {
                           console.log(e);
                           setFilterForm((cur) => ({
                              ...cur,
                              fromHour: e[0]._d,
                              toHour: e[1]._d || null,
                           }));
                        }}
                        placeholder={["שעת התחלה", "שעת סיום "]}
                     />
                  </Col>
               </Col>
               <Col className="col-1 btn-container">
                  <Button variant="success" onClick={filterTableHandler}>
                     סינון
                  </Button>
               </Col>
            </Row>
            <Row className="mt-3">
               <Col className="d-flex  col-3 oneLine">
                  <Col className="text-right col-9">
                     <Form.Label className="label ">
                        מספר שורות בעמוד
                     </Form.Label>
                  </Col>
                  <Col>
                     <input
                        name="numberOfRows"
                        value={filterForm.numberOfRows}
                        onChange={onChangeHandler}
                        className="input row-amount"
                        type="number"
                        min={1}
                        max={
                           isFiltered
                              ? tableFilteredData.length
                              : tableData.length
                        }
                     />{" "}
                  </Col>
               </Col>
            </Row>
            <Row className="mt-3">
               <Col className="d-flex  col-3 oneLine">
                  <Col className="relative">
                     <input
                        className="input search"
                        type="text"
                        placeholder="חיפוש"
                        onChange={searchHandler}
                     />
                     <img
                        src={searchIcon}
                        alt="search"
                        className="search-icon"
                     />
                  </Col>
               </Col>
            </Row>
         </Form>
         <Container>
            <MeetingsTable
               data={tableData}
               activePage={activePage}
               rowsAmount={Number(filterForm.numberOfRows)}
               isFiltered={isFiltered}
               filteredData={tableFilteredData}
            />
            <PaginationComp
               dataLength={tableData.length}
               isFiltered={isFiltered}
               filteredDataLength={tableFilteredData.length}
               rowsInPage={Number(filterForm.numberOfRows)}
               activePage={activePage}
               setActivePage={setActivePage}
            />
         </Container>
      </>
   );
};
export default MyMeetings;
