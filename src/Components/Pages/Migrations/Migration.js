import React, { useState } from "react";
import Card from "../../UI/Card/Card";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  Alert_Message,
  selectMsgType,
} from "../../Redux/Features/Alert/alertSlice";
import { useNavigate } from "react-router-dom";

//files
import * as XLSX from "xlsx";

//service
import { dataMigration } from "../../Services/Migration/migrationService";

//css
import './migration.css'
const Migration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const messagesType = useSelector(selectMsgType);
  const [excelData, setExcelData] = useState();

  const dataMigrationExcel = (event) => {
    const file = event.target.files[0];
    let fileName = "";
    var filevalue = document.getElementById("files").value;
    fileName = filevalue.split("\\");

    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve([fileName, data]);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((data) => {
      const [fileName, d] = data;
      setExcelData(d);
    });
  };

  const onClickCancel = () => {
    navigate("/");
  };

  const onClickMigrate = (event) => {
    event.preventDefault();
    dispatch(dataMigration(
      excelData,
      (res) => {
        dispatch(
          Alert_Message({ msgType: messagesType.successMsg, msg: "Login Success!" })
        );
      },
      (err) => {
        dispatch(
          Alert_Message({ msgType: messagesType.errorMsg, msg: err})
        );
      }
    ));
  };
  return (
    <div>
      <Card
        style={{ marginTop: 45, width: "35%" }}
        cardTitle="Data Migration"
        subTitle="Migrate your Excel File"
      >
        <form>
          <div className="container">
            <input type="file" id="files" onChange={dataMigrationExcel} />
          </div>
          <div className="btnContainer">
            <button type="button" className="cancelbtn" onClick={onClickCancel}>
              Cancel
            </button>
            <button type="submit" onClick={onClickMigrate}>
              Login
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Migration;
