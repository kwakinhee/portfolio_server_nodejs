local accountId = ARGV[1]
local token = ARGV[2]
local curTimeUtcInSec = ARGV[3]

local accountKey = 'account:' .. accountId

redis.call('HMSET', accountKey,
  'enterWorldToken', token,
  'enterWorldTokenTs', curTimeUtcInSec)
