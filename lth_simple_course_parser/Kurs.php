
<?php
// OBS VI MÅSTE PARSA FLER PROGRAM MEN JAG ÄR LAT. Det är bara att copy-pastea från kurshemsidan nere i funktionen extractProgram()

/* Representation av en kurs parsad från lth */
class Kurs {

	public $kursnamn;				// Kursnamn*  
	public $kurskod;				// Kurskod*
	public $poang;					// Antal högskolepoäng*
	public $niva;					// Nivå* 
	//public $lut;					// Lämplig för bytisar
	public $sprak;					// Föreläsningsspråk
	public $inriktning_id;			// Inriktning förkortning*
	public $inriktning;				// Inriktning 
	public $ingar_i_arskurs;		// Ingår i årskurs
	//public $from_arskurs;			// Från årskurs
	public $typ;					// Obligatorisk, alternativobligatorisk eller valfri
	public $program_id;				// Program
	public $program;				// Program

	public $webbsidor;				// Addr till kursplan, kurshemsida, ceq, schema

	public $fotnot;					// Fotnot
	public $periodiserad;			// True om kurs är periodiserad* 
	public $lasperioder;			// Lista med lasperiod samt info om antal föreläsnignar etc per läsperiod*

	public function __construct($array_data, $lp, $webb_addr, $fotnot, $periodiserad, $block) {
		
		$this->lasperioder = $this->extractStudyPeriod($lp);
		$this->webbsidor = $webb_addr;
		$this->periodiserad = $periodiserad;
		$this->fotnot = $fotnot;

		// Beroende på vilket block kursen tillhör, har datan parsats olika då kolumnerna 
		// inte är i samma ordning för kurser i olika block

		if($block == "grundblock") {
			// Skapa en kurs ur grundblocket
			$this->kurskod = array_shift($array_data);
			$this->poang = $this->convertToFloat(array_shift($array_data));
			$this->niva = array_shift($array_data);
			//$this->lut = array_shift($array_data);
			array_shift($array_data);
			$this->sprak = array_shift($array_data);
			$this->kursnamn = array_shift($array_data);
			array_shift($array_data);
			array_shift($array_data);
			array_shift($array_data);
			$this->inriktning_id = array_shift($array_data);
			
			//$this->inriktning = array_shift($array_data);
			if($this->inriktning_id == 'ak1') {
				$this->inriktning_id = 'åk1';
				$this->inriktning = 'Årskurs 1';
			} else if($this->inriktning_id == 'ak2') {
				$this->inriktning_id = 'åk2';
				$this->inriktning = 'Årskurs 2';
			} else {
				$this->inriktning_id = 'åk3';
				$this->inriktning = 'Årskurs 3';
			}

			$this->program_id = array_shift($array_data);
			$this->typ = $this->extractType(array_shift($array_data));
			$this->ingar_i_arskurs = array_shift($array_data);
			//$this->from_arskurs = "-";
		}
		else if($block == "specialisering")
		{
			// Skapa en specialiseringskurs
			$this->kurskod = array_shift($array_data);
			$this->poang = array_shift($array_data);
			$this->niva = array_shift($array_data);
			$this->typ = array_shift($array_data);
			$this->ingar_i_arskurs = array_shift($array_data);
			//$this->from_arskurs = array_shift($array_data);
			array_shift($array_data);
			//$this->lut = array_shift($array_data);
			array_shift($array_data);
			$this->sprak = array_shift($array_data);
			$this->kursnamn = array_shift($array_data);
			$this->inriktning_id = array_shift($array_data);
			$this->program_id = array_shift($array_data);
			array_shift($array_data);
			$this->inriktning = $this->extractSpecialization(array_shift($array_data));
			
		}
		else if($block == "exjobb") {
			$this->kurskod = array_shift($array_data);
			$this->poang = array_shift($array_data);
			$this->kursnamn = array_shift($array_data);
			$this->inriktning_id = 'exjobb';
			$this->inriktning = 'Examensarbete';
		}
		else {
			// Skapa en valfri kurs
			$this->kurskod = array_shift($array_data);
			$this->poang = array_shift($array_data);
			$this->niva = array_shift($array_data);
			$this->ingar_i_arskurs = array_shift($array_data);
			//$this->from_arskurs = array_shift($array_data);
			array_shift($array_data);
			//$this->lut = array_shift($array_data);
			array_shift($array_data);
			$this->sprak = array_shift($array_data);
			$this->kursnamn = array_shift($array_data);
			
			array_shift($array_data);
			array_shift($array_data);

			$this->typ = array_shift($array_data);
			$this->inriktning_id = 'valfri';
			$this->inriktning = 'Valfria kurser';
		}

		$this->program = $this->extractProgram();

	}

	private function convertToFloat($stringNbr) {
		if(strstr($stringNbr, ",")) { 
    		$stringNbr = str_replace(",", ".", $stringNbr); // replace ',' with '.' 
  		} 
		return floatval($stringNbr);
	}

	private function extractStudyPeriod($studyPeriodData) {
		$studyPeriods = array();
        foreach ($studyPeriodData as $key => $value) {
			array_push($studyPeriods, $key);
		}
        return $studyPeriods;
	}

	private function extractSpecialization($specData) {
		if(strpos($specData, "Specialisering ") === 0) {
			$pattern = "/^(.*?)\-\s/";
			return preg_replace($pattern, "", $specData);
		}
		return $specData;
	}

	private function extractType($type) {
		//Obligatorisk, alternativobligatorisk eller valfri

		switch ($type) {
		    case "O":
		        return "Obligatorisk";
		    case "A":
		        return "Alternativ-obligatorisk";
		    case "V":
		        return "Valfri";
		}		

		return "Okänt";
	}

	private function extractProgram() {
		$id = $this->program_id;

		switch ($id) {
		    case "A":
		        return "Arkitektur";
		    case "B":
		        return "Bioteknik";
		    case "BI":
		        return "Brandingenjör";
		    case "BME":
		        return "Medicin och teknik";
		    case "C":
		        return "Infocom";
		    case "D":
		        return "Datateknik";
		    case "E":
		        return "Elektroteknik";
		    case "F":
		        return "Teknisk fysik";
		    case "I":
		        return "Industriell ekonomi";
		    case "IBYA":
		        return "Byggteknik med arkitektur";
		    case "IBYI":
		        return "Byggteknik, inriktning järnvägsteknik";
		    case "IBYV":
		        return "Byggteknik, inriktning väg- och trafikteknik";
		    case "IDA":
		        return "Datateknik (Hbg)";
		    case "IDL":
		        return "Datateknik med logistik";
		    case "IEA":
		        return "Elektroteknik med automation (Hbg)";
		    case "K":
		        return "Kemiteknik";
		    case "KID":
		        return "Industridesign";
		    case "M":
		        return "Maskinteknik";
		    case "L":
		    	return "Lantmäteri";
		    case "MARK":
		        return "Masterutbildning i arkitektur";
		    case "INEK":
		    	return "Industriell ekonomi (avslutning)";
		}
		return "Okänt program";
	}

}

?>