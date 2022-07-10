
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import '../../styles/global.css'
import { ArrowSquareUp, ArrowSquareDown } from 'phosphor-react';
import { Link } from 'react-router-dom';

const SearchBar = () => {


    const [dataDe, setdataDe] = useState(new Date());
    const [dataRe, setdataRe] = useState(new Date());

    const handleChangeDe = (newValue) => {
        setdataDe(newValue)
    }
    const handleChangeRe = (newValue) => {
        setdataRe(newValue)
    }
    // menuClass
    const [seatClass, setSeatClass] = useState('Economy')
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (events) => {
        const id = ['Economy', 'Primium Economy', 'Business', 'First Class']
        setSeatClass(id[events.target.id])

        setAnchorEl(null);

    };
    // menuClass

    // menuTraveller
    const [adult, setadult] = useState(0);
    const [children, setchildren] = useState(0);
    const [anchorTr, setAnchorTr] = useState(null);
    const openTr = Boolean(anchorTr);

    const handleClickTr = (event) => {
        setAnchorTr(event.currentTarget);
    };
    const handleCloseTr = () => {
        setAnchorTr(null);

    }
    const tra = () => {
        let msg = `${adult} Adults / ${children} Children`
        return msg
    }





    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>

            <div className="border-2 rounded-md w-80% max-w-[1000px] p-[10px] bg-white border-blue-10">
                <div className="grid ">
                    <div className=" flex justify-start">
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                {seatClass}
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose} id='0'>Economy</MenuItem>
                                <MenuItem onClick={handleClose} id='1'>Premium Economy</MenuItem>
                                <MenuItem onClick={handleClose} id='2'>Business</MenuItem>
                                <MenuItem onClick={handleClose} id='3'>First Class</MenuItem>
                            </Menu>
                        </div>
                        {/*  */}
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={openTr ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openTr ? 'true' : undefined}
                                onClick={handleClickTr}
                            >
                                {tra()}
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorTr}
                                open={openTr}
                                onClose={handleCloseTr}

                            >
                                <MenuItem id='adult' >
                                    <div className="flex justify-center  gap-x-3 h-[30px] mt-[20px]">
                                        <label className="text-lg  text-gray-800 mr-4">
                                            Adults
                                        </label>
                                        <button type="button"
                                            name='btAdult'
                                            id="min"
                                            onClick={() => setadult(adult - 1)}
                                        >
                                            <ArrowSquareDown size={32} color="#111212" weight="thin" />
                                        </button>
                                        <label className="w-5 text-center  mt-1">
                                            {adult}
                                        </label>
                                        <button className=''
                                            type="button"
                                            name='btAdult'
                                            id='plus'
                                            onClick={() => setadult(adult + 1)}
                                        >
                                            <ArrowSquareUp size={32} color="#111212" weight="thin" />
                                        </button>
                                    </div>
                                </MenuItem>
                                <MenuItem id='children'>
                                    <div className="flex justify-center  gap-x-3 h-[30px] mt-[20px]">
                                        <label className="text-lg  text-gray-800">
                                            Children
                                        </label>
                                        <button type="button"
                                            name='btchildren'
                                            id="min"
                                            onClick={() => setchildren(children - 1)}
                                        >
                                            <ArrowSquareDown size={32} color="#111212" weight="thin" />
                                        </button>
                                        <label className="w-5 text-center  mt-1">
                                            {children}
                                        </label>
                                        <button className=''
                                            type="button"
                                            name='btchildren'
                                            id="plus"
                                            onClick={() => setchildren(children + 1)}
                                        >
                                            <ArrowSquareUp size={32} color="#111212" weight="thin" />
                                        </button>
                                    </div>
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>

                    <div className="flex gap-x-7">
                        {/* from  & to field */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Leaving from"
                            defaultValue=""
                            className="w-[250px]"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Going to"
                            defaultValue=""
                            className="w-[250px]"
                        />
                        {/* from & to field */}

                        <Stack spacing={2} className="w-[150px] ">
                            <DesktopDatePicker
                                label="Leaving"
                                // inputFormat="MM/dd/yyyy"
                                value={dataDe}
                                onChange={handleChangeDe}
                                renderInput={(params) => <TextField {...params} />}

                            />
                        </Stack>
                        <Stack spacing={2} className="w-[150px] ">
                            <DesktopDatePicker
                                label="Returning"
                                // inputFormat="MM/dd/yyyy"
                                value={dataRe}
                                onChange={handleChangeRe}
                                renderInput={(params) => <TextField {...params} />}

                            />
                        </Stack>
                        {/* Departing & returning */}

                    </div>
                    <div className="flex justify-center mt-[20px]">
                        <Link to='psearch'
                            className=" border-4 border-blue-10  bg-blue-10  
                        w-[210px] h-[60px] font-semibold uppercase rounded-md text-center  m-[5px]
                        active:border-blue-50 text-white 
                        ">
                            Search
                        </Link>
                    </div>
                </div>
            </div>
        </LocalizationProvider >
    )
}

export default SearchBar