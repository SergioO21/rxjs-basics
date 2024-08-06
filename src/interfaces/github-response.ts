import { User } from "./github-user";

export interface GitHubResponse {
  total_count?:        number;
  incomplete_results?: boolean;
  items?:              User[];
}
