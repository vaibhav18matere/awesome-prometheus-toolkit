import { SiMysql } from '@icons-pack/react-simple-icons';
import {PostgreSQLIcon, SQLServer, MissingPieceIcon} from './icons.js';

export const databases = [
  {
    icon: SiMysql,
    heading: 'MySQL',
    rules: 28,
    classname: '#4479A1',
    description:
      'Prometheus job missing, Prometheus job missing, Prometheus target missing, Prometheus all target missing',
    link: '',
  },
  {
    icon: PostgreSQLIcon,
    heading: 'PostgreSQL',
    rules: 28,
    description:
      'Prometheus job missing, Prometheus job missing, Prometheus target missing, Prometheus all target missing',
    link: '',
  },
  {
    icon: SQLServer,
    heading: 'SQL Server',
    rules: 28,
    description:
      'Prometheus job missing, Prometheus job missing, Prometheus target missing, Prometheus all target missing',
    link: '',
  },
  {
    icon: MissingPieceIcon,
    heading: 'Patroni',
    rules: 1,
    description: 'Patroni has no Leader',
    link: '',
  }
];
