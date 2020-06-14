import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateDistrictService {


  districtArray:any[]=[];

 
  AndamanAndNicobarDistrict: string[] = ["Nicobars", "North and Middle Andaman", "South Andaman", "Unknown"];

    AndhraPradeshDistrict: string[] = ["Anantapur", "Chittoor", "East Godavari", "Foreign Evacuees", "Guntur",
        "Krishna", "Kurnool", "Other State", "Prakasam", "S.P.S. Nellore", "Srikakulam",
        "Visakhapatnam", "Vizianagaram", "West Godavari", "Y.S.R. Kadapa"];

    ArunachalPradeshDistrict: string[] = ["Anjaw", "Changlang", "East Kameng", "East Siang", "Kamle", "Kra Daadi",
        "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri",
        "Namsai", "Pakke Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Dibang Valley",
        "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"]

    AssamDistrict: string[] = ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang",
        "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat",
        "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj",
        "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Other State", "Sivasagar", "Sonitpur",
        "South Salmara Mankachar", "Tinsukia", "Udalguri", "Unknown", "West Karbi Anglong"];

    BiharDistrict: string[] = ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar",
        "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj",
        "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas",
        "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"];

    ChandigarhDistrict: string[] = ["Chandigarh"];

    ChhattisgarhDistrict: string[] = ["Balod", "Baloda Bazar", "Balrampur", "Bametara", "Bastar", "Bijapur", "Bilaspur",
        "Dakshin Bastar Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela Pendra Marwahi", "Janjgir Champa",
        "Jashpur", "Kabeerdham", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Other State",
        "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja", "Uttar Bastar Kanker"];

    DadraAndNagarHaveliAndDamanAndDiuDistrict: string[] = ["Dadra and Nagar Haveli", "Daman", "Diu"];

    DelhiDistrict: string[] = ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi",
        "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "Unknown", "West Delhi"];

    GoaDistrict: string[] = ["North Goa", "South Goa", "Unknown"];

    GujaratDistrict: string[] = ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad",
        "Chhota Udaipur", "Dahod", "Dang", "Devbhumi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda",
        "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Other State", "Panchmahal", "Patan", "Porbandar",
        "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"];

    HaryanaDistrict: string[] = ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Foreign Evacuees", "Gurugram",
        "Hisar", "Italians", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal",
        "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"];

    HimachalPradeshDistrict: string[] = ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti",
        "Mandi", "Shimla", "Sirmaur", "Solan", "Una"];

    JammuAndKashmirDistrict: string[] = ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua",
        "Kishtwar", "Kulgam", "Kupwara", "Mirpur", "Muzaffarabad", "Pulwama", "Punch", "Rajouri", "Ramban", "Reasi", "Samba",
        "Shopiyan", "Srinagar", "Udhampur"];

    JharkhandDistrict: string[] = ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih",
        "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh",
        "Ranchi", "Sahibganj", "Saraikela-Kharsawan", "Simdega", "West Singhbhum"];

    KarnatakaDistrict: string[] = ["Bagalkote", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagara",
        "Chikkaballapura", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan",
        "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Other State", "Raichur", "Ramanagara",
        "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"];

    KeralaDistrict: string[] = ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode",
        "Malappuram", "Other State", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"];

    LadakhDistrict: string[] = ["Kargil", "Leh"];

    LakshadweepDistrict: string[] = ["Lakshadweep"];

    MadhyaPradeshDistrict: string[] = ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul",
        "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior",
        "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur",
        "Morena", "Narsinghpur", "Neemuch", "Niwari", "Other Region", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa",
        "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh",
        "Ujjain", "Umaria", "Vidisha"];

    MaharashtraDistrict: string[] = ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana",
        "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai", "Mumbai Suburban",
        "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Other State", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri",
        "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"];

    ManipurDistrict: string[] = ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching",
        "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul", "Unknown"];

    MeghalayaDistrict: string[] = ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ribhoi",
        "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "Unknown", "West Garo Hills",
        "West Jaintia Hills", "West Khasi Hills"];

    MizoramDistrict: string[] = ["Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha",
        "Saitual", "Serchhip"];

    NagalandDistrict: string[] = ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang",
        "Unknown", "Wokha", "Zunheboto"];

    OdishaDistrict: string[] = ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal",
        "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha",
        "Koraput", "Malkangiri", "Mayurbhanj", "Other", "Nabarangapur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur",
        "Subarnapur", "Sundargarh"];

    PuducherryDistrict: string[] = ["Karaikal", "Mahe", "Puducherry", "Yanam"];

    PunjabDistrict: string[] = ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur",
        "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Pathankot", "Patiala", "Rupnagar", "S.A.S. Nagar", "Sangrur",
        "Shahid Bhagat Singh Nagar", "Sri Muktsar Sahib", "Tarn Taran"];

    RajasthanDistrict: string[] = ["Ajmer", "Alwar", "BSF Camp", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner",
        "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Evacuees", "Ganganagar", "Hanumangarh", "Italians", "Jaipur",
        "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Other State", "Pali", "Pratapgarh",
        "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Tonk", "Udaipur"];


    SikkimDistrict: string[] = ["East Sikkim", "North Sikkim", "South Sikkim", "Unknown", "West Sikkim"];

    StateUnassignedDistrict: string[] = ["Unassigned"];

    TamilNaduDistrict: string[] = ["Airport Quarantine", "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
        "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal",
        "Nilgiris", "Other State", "Perambalur", "Pudukkottai", "Railway Quarantine", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga",
        "Tenkasi", "Thanjavur", "Theni", "Thiruvallur", "Thiruvarur", "Thoothukkudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur",
        "Tiruppur", "Tiruvannamalai", "Vellore", "Viluppuram", "Virudhunagar"];

    TelanganaDistrict: string[] = ["Adilabad", "Bhadradri Kothagudem", "Foreign Evacuees", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalapally",
        "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahabubnagar", "Mancherial",
        "Medak", "Medchal Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Other State", "Peddapalli",
        "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Unknown", "Vikarabad", "Wanaparthy",
        "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"];

    TripuraDistrict: string[] = ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sipahijala", "South Tripura", "Unknown", "Unokoti", "West Tripura"];

    UttarPradeshDistrict: string[] = ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat",
        "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr",
        "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar",
        "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi",
        "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow",
        "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh",
        "Prayagraj", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shrawasti",
        "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"];

    UttarakhandDistrict: string[] = ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh",
        "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"];

    WestBengalDistrict: string[] = ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly",
        "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas",
        "Other State", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"];


        constructor() { 
          this.districtArray.push({state:"Andaman and Nicobar Islands",data:this.AndamanAndNicobarDistrict},
          {state:"Andhra Pradesh",data:this.AndhraPradeshDistrict},
          {state:"Arunachal Pradesh",data:this.ArunachalPradeshDistrict},
          {state:"Assam",data:this.AssamDistrict},
          {state:"Bihar",data:this.BiharDistrict},
          {state:"Chandigarh",data:this.ChandigarhDistrict},
          {state:"Chhattisgarh",data:this.ChhattisgarhDistrict},
          {state:"Dadra and Nagar Haveli and Daman and Diu",data:this.DadraAndNagarHaveliAndDamanAndDiuDistrict},
          {state:"Delhi",data:this.DelhiDistrict},
          {state:"Goa",data:this.GoaDistrict},
          {state:"Gujarat",data:this.GujaratDistrict},
          {state:"Haryana",data:this.HaryanaDistrict},
          {state:"Himachal Pradesh",data:this.HimachalPradeshDistrict},
          {state:"Jammu and Kashmir",data:this.JammuAndKashmirDistrict},
          {state:"Jharkhand",data:this.JharkhandDistrict},
          {state:"Karnataka",data:this.KarnatakaDistrict},
          {state:"Kerala",data:this.KeralaDistrict},
          {state:"Ladakh",data:this.LadakhDistrict},
          {state:"Lakshadweep",data:this.LakshadweepDistrict},
          {state:"Madhya Pradesh",data:this.MadhyaPradeshDistrict},
          {state:"Maharashtra",data:this.MaharashtraDistrict},
          {state:"Manipur",data:this.ManipurDistrict},
          {state:"Meghalaya",data:this.MeghalayaDistrict},
          {state:"Mizoram",data:this.MizoramDistrict},
          {state:"Nagaland",data:this.NagalandDistrict},
          {state:"Odisha",data:this.OdishaDistrict},
          {state:"Puducherry",data:this.PuducherryDistrict},
          {state:"Punjab",data:this.PunjabDistrict},
          {state:"Rajasthan",data:this.RajasthanDistrict},
          {state:"Sikkim",data:this.SikkimDistrict},
          {state:"State Unassigned",data:this.StateUnassignedDistrict},
          {state:"Tamil Nadu",data:this.TamilNaduDistrict},
          {state:"Telangana",data:this.TelanganaDistrict},
          {state:"Tripura",data:this.TripuraDistrict},
          {state:"Uttar Pradesh",data:this.UttarPradeshDistrict},
          {state:"Uttarakhand",data:this.UttarakhandDistrict},
          {state:"West Bengal",data:this.WestBengalDistrict});
        }
      

    getdistrictData(stateobj,stateName,selectedRadioButton){
        let data1:any[]=[]
          for(let i=0;i<this.districtArray.length;i++){
            if(this.districtArray[i]["state"]==stateName){
              for(let j=0;j<this.districtArray[i]["data"].length;j++){
                data1.push({
                  districtName:this.districtArray[i]["data"][j],
                  value:stateobj[this.districtArray[i]["data"][j]][selectedRadioButton]
                })
              }
            break;
            }
          }
          return data1;
          //console.log(data1);
      }
}
