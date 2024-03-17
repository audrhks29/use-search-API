interface MoreButtonProps {
  fetchNextPage: () => void;
  style: Properties<string>
}

interface WeatherDataType {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}