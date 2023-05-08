import React, { useState } from "react";
import styles from "./App.module.css";
import { Table, Input, Button } from "@mantine/core";
import { IconChevronDown, IconUser } from "@tabler/icons-react";

const elements = [{ name: "Abdul" }, { name: "Badang" }, { name: "Candra" }, { name: "Dias" }, { name: "Eno" }, { name: "Fahrul" }, { name: "Galih" }, { name: "Hanzo" }, { name: "Inaga" }, { name: "Jamal" }];

function App() {
  const [isHit, setIsHit] = useState<boolean>(false);
  const [aspek_penilaian_1, setAspek_penilaian_1] = useState({
    Abdul: 1,
    Badang: 1,
    Candra: 1,
    Dias: 1,
    Eno: 1,
    Fahrul: 1,
    Galih: 1,
    Hanzo: 1,
    Inaga: 1,
    Jamal: 1,
  });

  const [aspek_penilaian_2, setAspek_penilaian_2] = useState({
    Abdul: 1,
    Badang: 1,
    Candra: 1,
    Dias: 1,
    Eno: 1,
    Fahrul: 1,
    Galih: 1,
    Hanzo: 1,
    Inaga: 1,
    Jamal: 1,
  });

  const [aspek_penilaian_3, setAspek_penilaian_3] = useState({
    Abdul: 1,
    Badang: 1,
    Candra: 1,
    Dias: 1,
    Eno: 1,
    Fahrul: 1,
    Galih: 1,
    Hanzo: 1,
    Inaga: 1,
    Jamal: 1,
  });

  const [aspek_penilaian_4, setAspek_penilaian_4] = useState({
    Abdul: 1,
    Badang: 1,
    Candra: 1,
    Dias: 1,
    Eno: 1,
    Fahrul: 1,
    Galih: 1,
    Hanzo: 1,
    Inaga: 1,
    Jamal: 1,
  });

  const setAspekPenilaian = (mahasiswaName: any, value: any, setState: any, initialState: any) => {
    setState({
      ...initialState,
      [mahasiswaName]: value,
    });
  };

  const handleExportClick = () => {
    const data = {
      aspek_penilaian_1: {
        ...aspek_penilaian_1,
      },
      aspek_penilaian_2: {
        ...aspek_penilaian_2,
      },
      aspek_penilaian_3: {
        ...aspek_penilaian_3,
      },
      aspek_penilaian_4: {
        ...aspek_penilaian_4,
      },
    };
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    a.click();
    window.open(url, "_blank");
  };

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td className={styles.tableTextName}>
        {
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <IconUser className={styles.userIcon} />
            {element.name}
          </div>
        }
      </td>
      <td className={styles.tableText}>
        {
          <Input
            component="select"
            onChange={(e) => {
              setAspekPenilaian(element.name, parseInt(e.target.value), setAspek_penilaian_1, aspek_penilaian_1);
            }}
            rightSection={<IconChevronDown size={14} stroke={1.5} />}
            defaultValue={1}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </Input>
        }
      </td>
      <td className={styles.tableText}>
        {
          <Input
            component="select"
            onChange={(e) => {
              setAspekPenilaian(element.name, parseInt(e.target.value), setAspek_penilaian_2, aspek_penilaian_2);
            }}
            rightSection={<IconChevronDown size={14} stroke={1.5} />}
            defaultValue={1}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </Input>
        }
      </td>
      <td className={styles.tableText}>
        {
          <Input
            component="select"
            onChange={(e) => {
              setAspekPenilaian(element.name, parseInt(e.target.value), setAspek_penilaian_3, aspek_penilaian_3);
            }}
            rightSection={<IconChevronDown size={14} stroke={1.5} />}
            defaultValue={1}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </Input>
        }
      </td>
      <td className={styles.tableText}>
        {
          <Input
            component="select"
            onChange={(e) => {
              setAspekPenilaian(element.name, parseInt(e.target.value), setAspek_penilaian_4, aspek_penilaian_4);
            }}
            rightSection={<IconChevronDown size={14} stroke={1.5} />}
            defaultValue={1}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </Input>
        }
      </td>
    </tr>
  ));

  return (
    <div className={styles.App}>
      <p className={styles.title}>Aplikasi Penilaian Mahasiswa</p>
      <Table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableText}>Nama</th>
            <th className={styles.tableText}>Aspek Penilaian 1</th>
            <th className={styles.tableText}>Aspek Penilain 2</th>
            <th className={styles.tableText}>Aspek Penilaian 3</th>
            <th className={styles.tableText}>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <div
        style={{
          width: "50%",
          marginTop: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={() => {
            const data = {
              aspek_penilaian_1: {
                ...aspek_penilaian_1,
              },
              aspek_penilaian_2: {
                ...aspek_penilaian_2,
              },
              aspek_penilaian_3: {
                ...aspek_penilaian_3,
              },
              aspek_penilaian_4: {
                ...aspek_penilaian_4,
              },
            };
            setIsHit(!isHit);
            console.log(JSON.stringify(data, null, 2));
          }}
          className={styles.button}
          style={{
            marginRight: "2rem",
          }}
        >
          Lihat Hasil
        </Button>
        <Button onClick={handleExportClick} className={styles.button}>
          Download
        </Button>
      </div>
      {isHit && <p>preview hasil bisa diliat di console browser :)</p>}
    </div>
  );
}

export default App;
