import {
  MissingPieceIcon,
  WindowsIcon,
  SiPrometheusIcon,
  SiDockerIcon,
  NetDataIcon,
} from './icons.js';

export const libraries = [
  {
    icon: SiPrometheusIcon,
    heading: 'Prometheus self-monitoring',
    rules: 28,
    description:
      'Prometheus job missing, Prometheus job missing, Prometheus target missing, Prometheus all target missing, Pr...',
    link: '',
  },
  {
    icon: MissingPieceIcon,
    heading: 'Host and hardware',
    rules: 38,
    description:
      'Host out of memory, Host memory under memory pressure, Host memory is underutilized, Host unusual network through',
    link: '',
  },
  {
    icon: MissingPieceIcon,
    heading: 'S.M.A.R.T Device Monitoring',
    rules: 5,
    description:
      'Smart device temperature warning, Smart device temperature critical, Smart critical warning, Smart media errors, Smart NVME Wearout Indicator',
    link: '',
  },
  {
    icon: SiDockerIcon,
    heading: 'Docker Containers',
    rules: 8,
    description:
      'Prometheus job missing, Prometheus job missing, Prometheus target missing, Prometheus all target missing',
    link: '',
  },
  {
    icon: MissingPieceIcon,
    heading: 'Blackbox',
    rules: 9,
    description:
      'Prometheus job missing, Prometheus job missing, Prometheus target missing, Prometheus all target missing',
    link: '',
  },
  {
    icon: WindowsIcon,
    heading: 'Windows Server',
    rules: 5,
    description:
      'Prometheus job missing, Prometheus job missing, Prometheus target missing, Prometheus all target missing',
    link: '',
  },
  {
    icon: SiPrometheusIcon,
    heading: 'VMware',
    rules: 4,
    description:
      'Prometheus job missing, Prometheus job missing, Prometheus target missing, Prometheus all target missing',
    link: '',
  },
  {
    icon: NetDataIcon,
    heading: 'Netdata',
    rules: 9,
    description:
      'Prometheus job missing, Prometheus job missing, Prometheus target missing, Prometheus all target missing',
    link: '',
  },
];
