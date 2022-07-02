<div className="flex justify-center">
    {/* div - 1 */}
    <div className="bg-gray-300 w-full max-w-[750px]  mb-20 flex  flex-row justify-items-stretch">
        {/* div - 2 */}
        <div>
            <TextField id="standard-basic" label="Destination" variant="outlined" />
        </div>

        <div classname="w-20">
            <FormControl fullWidth className="w-24">
                <InputLabel id="demo-simple-select-label">Rooms</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                // id="demo-simple-select"
                // value=''
                // label="Age"
                // onChange={handleChange}
                >
                    <MenuItem value={1}>Ten</MenuItem>
                    <MenuItem value={2}>Twenty</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Guess</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                // id="demo-simple-select"
                // value=''
                // label="Age"
                // onChange={handleChange}
                >
                    <MenuItem value={1}>Ten</MenuItem>
                    <MenuItem value={2}>Twenty</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    </div>
</div>