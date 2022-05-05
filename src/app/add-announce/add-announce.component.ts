import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
@Component({
  selector: 'app-add-announce',
  templateUrl: './add-announce.component.html',
  styleUrls: ['./add-announce.component.css'],
})
export class AddAnnounceComponent implements OnInit {
  radioValue = 'A';
  value = 'A';
  val = '';

  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  log(value: string[]): void {
    console.log(value);
  }
  selectedProvince = '';
  selectedCity = '';
  provinceData = [
    'Ben Arous',
    'Ariana',
    'Béja',
    'Bizerte',
    'Gabès',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'kébili',
    'Kef',
    'Manouba',
    'Mahdia',
    'Médenine',
    'Monastir',
    'Nabeul',
    'Sfax',
    'Sidi Bouzid',
    'Siliana',
    'Sousse',
    'Tataouine',
    'Tozeur',
    'Tunis',
    'Zaghouan',
  ];
  cityData: { [place: string]: string[] } = {
    'Ben Arous': [
      'Borj Cedria',
      'Boumhel',
      'El Mourouj',
      'Ezzahra',
      'Fouchana',
      'Hammam Chott',
      'Hammam Lif',
      'Mohamedia',
      'Medina Jedida',
      'Mégrine',
      'Mornag',
      'Radés',
    ],
    Ariana: [
      'Ariana Ville',
      'Ettadhamen',
      'Kalaat El Andalous',
      'La Soukra',
      'Mnihla',
      'Raoued',
      'Sidi Thabet',
      'Borj Louzir',
      'Chotrana',
      'Ennasr',
      'Ghazela',
      "Jardins D'El Menzah",
      'Menzah',
      'Manar',
    ],
    Béja: [
      'Amdoun',
      'Béja Nord',
      'Béja Sud',
      'Goubellat',
      'Medjez El-Beb',
      'Nefza',
      'Téboursouk',
      'Testour',
      'Thibar',
    ],
    Bizerte: [
      'Bizerte Nord',
      'Bizerte Sud',
      'Djoumime',
      'El Alia',
      'Ghar El Melh',
      'Ghezala',
      'Mateur',
      'Menzel Bourguiba',
      'Menzil Jemil',
      'Rass Jebal',
      'Sejenane',
      'Tinja',
      'Utique',
      'Zarzouna',
    ],
    Gabès: [
      'Gabés Médina',
      'Gabés Ouest',
      'Gabés Sud',
      'Ghanouch',
      'El Hamma',
      'Matmata',
      'Mareth',
      'Menzel El Habib',
      'Métouia',
      'Nouvelle Matmata',
    ],
    Gafsa: [
      'Belkhir',
      'El Guettar',
      'El Ksar',
      'Gafsa Nord',
      'Gafsa Sud',
      'Mdhila',
      'Métlaoui',
      'Oum El Araies',
      'Redeyef',
      'Sidi Aich',
      'Sened',
    ],
    Jendouba: [
      'Ain Draham',
      'Balta-Bou Aouane',
      'Bou Salem',
      'Fernana',
      'Ghardimaou',
      'Jendouba',
      'Jendouba Nord',
      'Oued Meliz',
      'Tabarka',
    ],
    Kairouan: [
      'Bouhajla',
      'Chebika',
      'Echrarda',
      'El Alâa',
      'El Ouslatia',
      'Haffouz',
      'Hajeb El Ayoun',
      'Kairouan Nord',
      'Kairouan Sud',
      'Nasrallah',
      'Sbikha',
    ],
    Kasserine: [
      'Djedeliane',
      'El Ayoun',
      'Ezzouhour',
      'Fériana',
      'Foussana',
      'Hassi Ferid',
      'Hidra',
      'Kasserine Nord',
      'Kasserine Sud',
      'Majel Bel Abbès',
      'Sbeïtla',
      'Sbiba',
      'Thala',
    ],
    kébili: [
      'Douz Nord',
      'Douz Sud',
      'Faouar',
      'kébili Nord',
      'kébili Sud',
      'Souk Lahad',
    ],
    Kef: [
      'Dahmani',
      'Djerissa',
      'El Ksour',
      'Es-Sers',
      'Kalâat Khasbah',
      'Kalâat Snan',
      'Kef Est',
      'Kef Ouest',
      'Nebeur',
      'Sakiet Sidi Youssef',
      'Tajerouine',
    ],
  };
  num = 0;
  bed = 0;
  bath = 0;
  inc() {
    this.num = this.num + 1;
  }
  dec() {
    this.num = this.num - 1;
  }
  incc() {
    this.bed = this.bed + 1;
  }
  decc() {
    this.bed = this.bed - 1;
  }
  inccc() {
    this.bath = this.bath + 1;
  }
  deccc() {
    this.bath = this.bath - 1;
  }

  fileList: NzUploadFile[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;

  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file['preview']) {
      file['preview'] = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;
  };

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      comment: [null, [Validators.maxLength(100)]],
    });
  }

  ngOnInit(): void {}
}
