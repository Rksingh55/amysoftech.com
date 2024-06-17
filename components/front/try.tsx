export default function Golum() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [getCurrency, setCurrency] = useState("");
    const [getAddress, setAddress] = useState("");
    const [selectCity, setSelectCity] = useState("");
    const [cityOptions, setCityOptions] = useState([]);

    const [selectId, setSelectId] = useState({
        id: null,
        name: null,
        min_deposit_amount: null,
    });

    useEffect(() => {
        setSelectCity({ label: "Select City", value: null });
        setCityOptions({ selectableTokens });
    }, []);

    const onCitySelect = (e) => {
        if (e == null) {
            setSelectId({
                ...selectId,
                id: null,
                name: null,
                min_deposit_amount: null,
            });
        } else {
            setSelectId({
                ...selectId,
                id: e.value.id,
                name: e.value.name,
                min_deposit_amount: e.value.min_deposit_amount,
            });
        }
        setSelectCity(e);
    };

    const selectableTokens =
        getCurrency &&
        getCurrency.map((value, key) => {
            return {
                value: value,
                label: (
                    <div>
                        <img
                            src={`https://central-1.amazonaws.com/assets/icons/icon-${value.id}.png`}
                            height={20}
                            className="mr-3"
                            alt={key}
                        />
                        <span className="mr-3 text-uppercase">{value.id}</span>
                        <span className="currency-name text-uppercase">
                            <span>{value.name}</span>
                        </span>
                    </div>
                ),
            };
        });

    useEffect(() => {
        const api = new Api();
        let mounted = true;
        if (!localStorage.getItem("ACCESS_TOKEN")) {
            router.push("/login");
        }
        if (mounted && localStorage.getItem("ACCESS_TOKEN")) {
            api
                .getRequest(
                    `${process.env.NEXT_PUBLIC_URL}api/currencies`
                )
                .then((response) => {
                    const data = response.data;
                    dispatch(setUserData({ ...data }));
                    setCurrency(data);
                });
        }
        return () => (mounted = false);
    }, []);

    useEffect(() => {
        const api = new Api();
        let mounted = true;

        if (!localStorage.getItem("ACCESS_TOKEN")) {
            router.push("/login");
        }
        if (mounted && localStorage.getItem("ACCESS_TOKEN")) {
            api
                .getRequest(
                    `${process.env.NEXT_PUBLIC_URL}api/address?currency=${selectId.id}`
                )
                .then((response) => {
                    const data = response.data;
                    dispatch(setUserData({ ...data }));
                    setAddress(data.address);
                })
                .catch((error) => { });
        }
        return () => (mounted = false);
    }, []);

    return (
        <>
            <div className="row mt-4">
                <Select
                    isClearable
                    isSearchable
                    onChange={onCitySelect}
                    value={selectCity}
                    options={selectableTokens}
                    placeholder="Select Coin"
                    className="col-md-4 selectCurrencyDeposit"
                />
            </div>

            <div className="row mt-4">
                <div className="col-md-4">
                    <Form>
                        <Form.Group className="mb-3" controlId="Form.ControlTextarea">
                            <Form.Control className="addressInput" readOnly defaultValue={getAddress || "No Address"} />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>
    );
}