// import your icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

import {
  loadCities,
  loadDivisions,
  loadCountries,
  loadOccupation,
  loadInstitute,
} from "../../helpers/profileHelpers";
import apiClient, { spaAuth, updateProfileInfo } from "../../util/api";
import { responseManager } from "../../util/auth";
import Compressor from "compressorjs";

const ProfileForm = (props) => {
  const [occupationFlag, setOccupationFlag] = useState(true);
  const [instituteFlag, setInstituteFlag] = useState(true);
  const [instituteHook, setInstituteHook] = useState("");
  const [occupationHook, setOccupationHook] = useState("");
  const [profilePictureHook, setProfilePictureHook] = useState("");
  const [genderHook, setGenderHook] = useState("");
  const [countryHook, setCountryHook] = useState("");
  const [cityHook, setCityHook] = useState("");
  const [divisionHook, setDivisionHook] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    profile_picture: profilePictureHook,
    gender: "",
    dob: "",
    contact_number: "",
    inst_org_id: instituteHook,
    institute_other: "",
    occupation_id: occupationHook,
    occupation_other: "",
    street_address: "",
    city_id: cityHook,
    division_id: divisionHook,
    country_id: countryHook,
    email: email,
    user_name: username,
  });

  const [instituteOptions, setInstituteOptions] = useState([]);
  const [occupationOptions, setOccupationsOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [divisionOptions, setDivisionOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);

  const [updateCountry, setUpdateCountry] = useState(true);
  const [updateDivision, setUpdateDivision] = useState(true);
  const [updateCity, setUpdateCity] = useState(true);
  const [updateInstitute, setUpdateInstitute] = useState(true);
  const [updateOccupation, setUpdateOccupation] = useState(true);

  const [auth, setAuth] = useState("");

  /* Get authentication details of logged in user */

  useEffect(() => {
    if (updateOccupation) {
      loadOccupation()
        .then((occupations) => {
          occupations.push({ id: "other", occupation: "Other" });
          setOccupationsOptions(occupations);
        })
        .catch((error) => {
          console.log(error);
        });
      setUpdateOccupation(false);
    }

    if (updateInstitute) {
      loadInstitute()
        .then((institutes) => {
          institutes.push({ id: "other", institute_name: "Other" });
          setInstituteOptions(institutes);
        })
        .catch((error) => {
          console.log(error);
        });
      setUpdateInstitute(false);
    }

    if (updateCountry) {
      loadCountries()
        .then((countries) => {
          setCountryOptions(countries);
        })
        .catch((error) => {
          console.log(error);
        });
      setUpdateCountry(false);
    }

    if (updateDivision && formData.country_id != "") {
      loadDivisions(formData.country_id)
        .then((divisions) => {
          setDivisionOptions(divisions);
        })
        .catch((error) => {
          console.log(error);
        });
      setUpdateDivision(false);
    }

    if (updateCity && formData.division_id != "") {
      loadCities(formData.division_id)
        .then((cities) => {
          setCityOptions(cities);
        })
        .catch((error) => {
          console.log(error);
        });
      setUpdateCity(false);
    }

    if (props.authData) {
      console.log("In setting auth data to hooks");

      setUserName(props.authData.user_name);
      setEmail(props.authData.email);

      setCountryHook(props.authData.country_id);
      setDivisionHook(props.authData.division_id);
      setCityHook(props.authData.city_id);
      setInstituteHook(props.authData.inst_org_id);
      setOccupationHook(props.authData.occupation_id);
      setGenderHook(props.authData.gender_id);
    }

    console.log("FormData", formData);
  }, [formData, props.authData]);

  //setting authdata
  useEffect(() => {
    if (props.authData) {
      setAuth(props.authData);
    }
  }, []);

  useEffect(() => {
    console.log("Profile Picture Hook ", profilePictureHook);
    setFormData((formData) => ({
      ...formData,
      profile_picture: profilePictureHook,
    }));
  }, [profilePictureHook]);

  //occupation handler for providing other occupation

  const occupationHander = (e) => {
    if (e.currentTarget.value == "other") {
      setOccupationFlag(false);
    } else {
      setOccupationFlag(true);
    }
  };

  //institute handler for providing other institute

  const instituteHandler = (e) => {
    if (e.currentTarget.value == "other") {
      setInstituteFlag(false);
    } else {
      setInstituteFlag(true);
    }
  };

  /**
   * Handle select option changes
   */
  const selectHandler = (selector, e) => {
    // console.log("selector " + selector, e.currentTarget);

    switch (selector) {
      case "profile_picture":
        setProfilePictureHook(e.currentTarget.files[0]);
        console.log(profilePictureHook);
        break;
      case "gender":
        setGenderHook(e.currentTarget.selected);
        break;
      case "institute":
        setInstituteHook(e.currentTarget.selected);
        instituteHandler(e);
        break;
      case "occupation":
        setOccupationHook(e.currentTarget.selected);
        occupationHander(e);
        break;
      case "city":
        setCityHook(e.currentTarget.selected);
        break;
      case "division":
        setDivisionHook(e.currentTarget.selected);
        break;
      case "country":
        setCountryHook(e.currentTarget.selected);
        break;
      default:
        break;
    }

    //input handler for certain select option input fieleds
    handleInputChange(e);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      email: email,
      user_name: username,
      [e.currentTarget.name]: e.currentTarget.value,
    });

    switch (e.currentTarget.name) {
      case "country":
        setUpdateDivision(true);
        setUpdateCity(true);
        setDivisionHook("");
        setCityHook("");
        setFormData((formData) => ({
          ...formData,
          division_id: "",
          city_id: "",
        }));
        setDivisionOptions([]);
        setCityOptions([]);
        console.log(e.currentTarget.selected);
        break;
      case "division":
        setUpdateCity(true);
        setCityHook("");
        setFormData((formData) => ({ ...formData, city_id: "" }));
        setCityOptions([]);
        break;
      case "institute":
        setUpdateInstitute(true);
        break;
      case "occupation":
        setUpdateOccupation(true);
        break;
      case "profile_picture":
        setFormData((formData) => ({
          ...formData,
          profile_picture: profilePictureHook,
        }));
        break;

      default:
        break;
    }
  };

  //  profile Submission handler
  const completeProfileFormHandler = async (e) => {
    e.preventDefault();

    //SPA Authorization
    await apiClient
      .get(spaAuth)
      .then(() => {
        //Compress Selected Image File
        console.log("pro pic hook type -> ", typeof profilePictureHook);

        new Compressor(profilePictureHook, {
          quality: 0.4,
          async success(result) {
            console.log("Inside Compression Function and compressed");
            const profile_picture_fd = new FormData();
            profile_picture_fd.append("profile_picture", result);

            return await apiClient
              .post(updateProfileInfo, profile_picture_fd, {
                headers: { "Content-Type": "multipart/form-data" },
              })
              .then(async (response) => {
                console.log(
                  "Response from profile picture post method ",
                  response.data
                );
                setProfilePictureHook(response.data);
                console.log("Form Data updated after pro-pic post", formData);

                //Update the User Profile Information Form along with the received profile picture path
                return await apiClient.put(updateProfileInfo, {
                  ...formData,
                  profile_picture: response.data,
                });
              })
              .then((response) => {
                console.log(
                  "Response from profile update put method ",
                  response
                );
                responseManager("complete-profile", response, formData);
              })
              .catch((error) => {
                console.log(error);
              });
          },
          error(err) {
            console.log(err);
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      className="flex flex-col justify-center w-full items-center flex-wrap"
      action=""
      id="RegForm"
      onSubmit={completeProfileFormHandler}
    >
      {/**
			Profile Picture
	*/}
      <label className="w-32 h-32 rounded-full flex flex-col items-center px-4 py-6 mb-8 bg-white shadow-md tracking-wide uppercase border-2 border-solid border-blue-100 text-gray-400 ease-linear transition-all duration-150">
        <FontAwesomeIcon icon={faUserAlt} size="4x" />
        <div className="relative left-12 bottom-4 p-2 border-solid border-2 border-gray-300 rounded-full text-center">
          <FontAwesomeIcon
            icon={faCamera}
            size="2x"
            className=" text-btn-color cursor-pointer transition-colors duration-500 hover:text-blue-200"
          />
        </div>
        <input
          id="profile_picture"
          name="profile_picture"
          type="file"
          accept=".jpg, .png"
          className="hidden"
          onChange={(e) => selectHandler("profile_picture", e)}
          required={true}
        />
      </label>

      <div className="w-full flex flex-col justify-center items-center mb-10">
        {/**
			Gender
			-> Felame
			-> Male
			-> Other
	 	*/}

        <select
          className="input h-10 pl-5 text-gray-400"
          id="gender"
          name="gender"
          value={genderHook}
          defaultValue={auth.gender}
          onChange={(e) => selectHandler("gender", e)}
          title="Gender"
          required={true}
        >
          <option className="text-gray-400" value={genderHook} disabled>
            Select Gender
          </option>
          <option value="1">Female</option>
          <option value="2">Male</option>
          <option value="3">Other</option>
        </select>

        {/**
			Date of Birth
	 	*/}
        <input
          className="input h-10 pl-5 text-gray-400"
          id="dob"
          type="text"
          name="dob"
          placeholder="Date of Birth"
          defaultValue={auth.dob}
          title="Date of Birth - DD/MM/YYYY"
          onChange={handleInputChange}
          onMouseEnter={(e) => {
            e.currentTarget.type = "date";
            // e.currentTarget.click();
          }}
          onBlur={(e) => {
            e.currentTarget.type = "text";
          }}
          required={true}
        />

        {/**
			Contact Number	
		*/}
        <input
          className="input h-10 pl-5"
          id="contact"
          type="tel"
          name="contact_number"
          placeholder="Contact Number"
          defaultValue={auth.contact_number}
          title="Contact Number (+88015********)"
          required={true}
          onChange={handleInputChange}
        />

        {/**
			Institute
		
		 */}

        <select
          className="input h-10 pl-5 text-gray-400 transition-all duration-500"
          id="institute"
          type="select"
          name="inst_org_id"
          value={instituteHook}
          defaultValue={auth.inst_org_id}
          onChange={(e) => selectHandler("institute", e)}
          title="Organization or Institute you are associated with"
          required={true}
        >
          <option
            className="text-gray-400"
            defaultValue={auth.inst_org_id}
            value={instituteHook}
            disabled
          >
            Select Institute
          </option>
          {instituteOptions.map((option) => (
            <option key={option.institute_name} value={option.id}>
              {option.institute_name}
            </option>
          ))}
        </select>

        {/**
			Other Institute
		*/}
        <input
          className="input h-10 pl-5 transition-all duration-500"
          id="institute_other"
          type="text"
          name="institute_other"
          placeholder="Provide Institution or Organization name"
          title="Specify your workplace or school name"
          onChange={handleInputChange}
          hidden={instituteFlag}
          disabled={instituteFlag}
          required={!instituteFlag}
        />

        {/**
			Occupation		
		*/}
        <select
          className="input h-10 pl-5 text-gray-400 transition-all duration-500"
          id="occupation"
          type="select"
          name="occupation_id"
          value={occupationHook}
          defaultValue={auth.occupation_id}
          onChange={(e) => selectHandler("occupation", e)}
          title="Occupation"
          required={true}
        >
          <option className="text-gray-400" value={occupationHook} disabled>
            Select Occupation
          </option>
          {occupationOptions.map((option) => (
            <option key={option.occupation} value={option.id}>
              {option.occupation}
            </option>
          ))}
        </select>

        {/**
			Other Occupation	
		*/}
        <input
          className="input h-10 pl-5 transition-all duration-500"
          id="occupation_other"
          type="text"
          name="occupation_other"
          placeholder="Provide your Occupation"
          title="Specify your occupation"
          hidden={occupationFlag}
          disabled={occupationFlag}
          required={!occupationFlag}
          onChange={handleInputChange}
        />

        {/**
			Country Selector
		*/}
        <select
          className="input h-10 pl-5 text-gray-400"
          id="country"
          name="country_id"
          value={countryHook}
          defaultValue={auth.country_id}
          title="Country"
          required={true}
          onChange={(e) => selectHandler("country", e)}
        >
          <option value={countryHook} disabled>
            Select Country
          </option>
          {countryOptions.map((option) => (
            <option key={option.country_name} value={option.id}>
              {option.country_name}
            </option>
          ))}
        </select>

        {/**
			Division Selector
		*/}
        <select
          className="input h-10 pl-5 text-gray-400"
          id="division"
          name="division_id"
          value={divisionHook}
          defaultValue={auth.division_id}
          title="State / Division"
          required={true}
          onChange={(e) => selectHandler("division", e)}
        >
          <option value={divisionHook} disabled>
            Select Division/State
          </option>
          {divisionOptions.map((option) => (
            <option key={option.division_name} value={option.id}>
              {option.division_name}
            </option>
          ))}
        </select>

        {/**
			City Selector
		*/}
        <select
          className="input h-10 pl-5 text-gray-400"
          id="city"
          type="select"
          name="city_id"
          value={cityHook}
          defaultValue={auth.city_id}
          title="City"
          required={true}
          placeholder="Select a city"
          onChange={(e) => selectHandler("city", e)}
        >
          <option value={cityHook} disabled>
            Select City
          </option>
          {cityOptions.map((option) => (
            <option key={option.city_name} value={option.id}>
              {option.city_name}
            </option>
          ))}
        </select>

        {/**
			Flat and Street Address
		*/}
        <input
          className="input h-10 pl-5"
          id="street_address"
          type="text"
          name="street_address"
          defaultValue={auth.street_address}
          placeholder="Flat #, Apartment, Street Address"
          title="Flat #, Apartment, Street Address"
          required={true}
          onChange={handleInputChange}
        />

        {/* Hidden input fields required for verification */}
        <input
          className="input h-10 pl-5"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          hidden
        />

        <input
          className="input h-10 pl-5"
          id="text"
          type="text"
          name="user_name"
          value={username}
          onChange={handleInputChange}
          hidden
        />
      </div>

      <button
        type="submit"
        name="submit"
        className="btn bg-blue-700 w-56 h-14 shadow-btn text-2xl mb-5 font-title font-bol"
      >
        Save
      </button>
    </form>
  );
};

export default ProfileForm;
