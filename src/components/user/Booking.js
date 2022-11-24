// import * as React from "react";
// import "./Booking.css";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
// import { addDays } from "date-fns";
// import { useState } from "react";

// function Booking() {
//   const design = { color: "blue", textAlign: "center" };
//   const [date, setDate] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 7),
//       key: "selection",
//     },
//   ]);
//   //console.log(date);
//   return (
//     <>
//       <h1 style={design}>Booking</h1>
//       <div>
//         <DateRangePicker
//           onChange={(item) => setDate([item.selection])}
//           showSelectionPreview={true}
//           moveRangeOnFirstSelection={false}
//           months={2}
//           ranges={date}
//           direction="horizontal"
//           className="date"
//         />
//       </div>
//       ;
//     </>
//   );
// }

// export default Booking;
import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import Stack from "@mui/material/Stack";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";

import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";

export default function ResponsiveDateTimePickers() {
  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        spacing={3}
        sx={{
          mt: 5,
          mb: 2,
        }}
      >
        <MobileDateTimePicker
          label="Select Date and time"
          ampm={false}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          dayOfWeekFormatter={(day) => `${day}.`}
          showToolbar
        />
        {/* <DesktopDateTimePicker
          label="For desktop"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DateTimePicker
          label="Responsive"
          renderInput={(params) => <TextField {...params} />}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        /> */}
      </Stack>
      <div>
        <FullCalendar plugins={[daygridPlugin]} />
      </div>
    </LocalizationProvider>
  );
}
