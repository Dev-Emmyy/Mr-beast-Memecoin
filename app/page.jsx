"use client"
import {useState, React}  from 'react';
import { Box, Typography, AppBar, Toolbar, Button, Container, Card, CardContent, IconButton, useTheme, useMediaQuery, Grid } from '@mui/material';
import { Twitter, Telegram, YouTube, Menu as MenuIcon, ArrowForward, CheckCircle, EmojiEvents, LocalFireDepartment, People, Favorite, Campaign, School } from '@mui/icons-material';
import Image from 'next/image';

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Social media brand colors
  const socialColors = {
    twitter: '#1DA1F2',    // Twitter blue
    telegram: '#0088cc',   // Telegram blue
    youtube: '#FF0000'     // YouTube red
  };

  return (
    <Box sx={{ 
      backgroundColor: '#0A0A0A',
      color: '#fff',
      minHeight: '100vh',
      overflowX: 'hidden',
      position: 'relative' // Added to contain the mobile menu
    }}>
      {/* Navbar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(10px)',
          zIndex: (theme) => theme.zIndex.drawer + 2 // Increased z-index to stay on top
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Image src="/logo.png" alt="MrBeast Memecoin Logo" width={40} height={40} />
              <Typography 
                variant="h6" 
                sx={{ 
                  background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold'
                }}
              >
                MrBeast Coin
              </Typography>
            </Box>
            
            {isMobile ? (
              <>
                <IconButton 
                  color="inherit" 
                  onClick={toggleMenu}
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                
                {/* Mobile Menu with Background Overlay */}
                {isMenuOpen && (
                  <>
                    {/* Background overlay covering only dropdown items */}
                    <Box
                      sx={{
                        position: 'fixed',
                        top: '64px', // Directly below the AppBar
                        left: 0,
                        right: 0,
                        bgcolor: 'rgba(0, 0, 0, 0.95)',
                        backdropFilter: 'blur(10px)',
                        zIndex: 1000,
                      }}
                      onClick={toggleMenu}
                    />
                    
                    {/* Dropdown Menu Content */}
                    <Box
                      sx={{
                        position: 'fixed',
                        top: '64px', // Below the AppBar
                        left: 0,
                        right: 0,
                        zIndex: 1001,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 4,
                        gap: 3,
                        bgcolor: 'rgba(0, 0, 0, 0.95)', // Menu background
                        animation: 'slideIn 0.3s ease-out',
                        '@keyframes slideIn': {
                          from: {
                            opacity: 0,
                            transform: 'translateY(-10px)',
                          },
                          to: {
                            opacity: 1,
                            transform: 'translateY(0)',
                          },
                        },
                      }}
                    >
                      <Button 
                        href="#features" 
                        onClick={toggleMenu}
                        sx={{ 
                          color: 'white',
                          fontSize: '1.2rem',
                          py: 2,
                          width: '200px',
                          '&:hover': { 
                            color: '#2196F3',
                            bgcolor: 'rgba(33, 150, 243, 0.1)',
                          },
                        }}
                      >
                        Features
                      </Button>
                      <Button 
                        href="#roadmap"
                        onClick={toggleMenu}
                        sx={{ 
                          color: 'white',
                          fontSize: '1.2rem',
                          py: 2,
                          width: '200px',
                          '&:hover': { 
                            color: '#2196F3',
                            bgcolor: 'rgba(33, 150, 243, 0.1)',
                          },
                        }}
                      >
                        Roadmap
                      </Button>
                      <Box sx={{ 
                        display: 'flex', 
                        gap: 3, 
                        mt: 4,
                        '& .MuiIconButton-root': {
                          width: '48px',
                          height: '48px',
                        },
                      }}>
                        <IconButton 
                          href="https://x.com/mrbeast/status/1861121958122770860" 
                          target="_blank"
                          sx={{ 
                            color: socialColors.twitter,
                            bgcolor: 'rgba(29, 161, 242, 0.1)',
                            '&:hover': { 
                              color: socialColors.twitter,
                              bgcolor: 'rgba(29, 161, 242, 0.2)',
                            },
                          }}
                        >
                          <Twitter />
                        </IconButton>
                        <IconButton 
                          href="https://youtu.be/2lyCZnx71ps" 
                          target="_blank"
                          sx={{ 
                            color: socialColors.telegram,
                            bgcolor: 'rgba(0, 136, 204, 0.1)',
                            '&:hover': { 
                              color: socialColors.telegram,
                              bgcolor: 'rgba(0, 136, 204, 0.2)',
                            },
                          }}
                        >
                          <Telegram />
                        </IconButton>
                        <IconButton 
                          href="https://www.youtube.com/@MrBeastGaming" 
                          target="_blank"
                          sx={{ 
                            color: socialColors.youtube,
                            bgcolor: 'rgba(255, 0, 0, 0.1)',
                            '&:hover': { 
                              color: socialColors.youtube,
                              bgcolor: 'rgba(255, 0, 0, 0.2)',
                            },
                          }}
                        >
                          <YouTube />
                        </IconButton>
                      </Box>
                    </Box>
                  </>
                )}
              </>
            ) : (
              // Desktop menu with branded social icons
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Button 
                  href="#features" 
                  sx={{ 
                    color: 'white',
                    '&:hover': { color: '#2196F3' }
                  }}
                >
                  Features
                </Button>
                <Button 
                  href="#roadmap"
                  sx={{ 
                    color: 'white',
                    '&:hover': { color: '#2196F3' }
                  }}
                >
                  Roadmap
                </Button>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton 
                    href="https://x.com/mrbeast/status/1861121958122770860" 
                    target="_blank"
                    sx={{ 
                      color: socialColors.twitter,
                      '&:hover': { 
                        color: socialColors.twitter,
                        bgcolor: 'rgba(29, 161, 242, 0.1)'
                      }
                    }}
                  >
                    <Twitter />
                  </IconButton>
                  <IconButton 
                    href="https://youtu.be/2lyCZnx71ps" 
                    target="_blank"
                    sx={{ 
                      color: socialColors.telegram,
                      '&:hover': { 
                        color: socialColors.telegram,
                        bgcolor: 'rgba(0, 136, 204, 0.1)'
                      }
                    }}
                  >
                    <Telegram />
                  </IconButton>
                  <IconButton 
                    href="https://www.youtube.com/@MrBeastGaming" 
                    target="_blank"
                    sx={{ 
                      color: socialColors.youtube,
                      '&:hover': { 
                        color: socialColors.youtube,
                        bgcolor: 'rgba(255, 0, 0, 0.1)'
                      }
                    }}
                  >
                    <YouTube />
                  </IconButton>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, rgba(10,10,10,0.9) 0%, rgba(0,0,0,0.95) 100%)',
          pt: '80px', // Added padding-top to prevent navbar overlap
          overflow: 'hidden',
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            '& > div': {
              position: 'unset !important'
            }
          }}
        >
          <Image
            src="/hero-background.jpg"
            alt="Background"
            fill
            style={{
              objectFit: 'cover',
              opacity: 0.2,
              zIndex: -1
            }}
            priority
          />
        </Box>
        
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            textAlign: 'center',
            gap: 4,
            position: 'relative',
            zIndex: 1
          }}>
            <Typography 
              variant="h1" 
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              The Future of Gaming Meets Crypto
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#999',
                maxWidth: '800px',
                mb: 4
              }}
            >
              Join the revolution where gaming, entertainment, and cryptocurrency unite to create an epic community-driven ecosystem
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                href="https://jup.ag/"
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
                  color: '#fff',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    background: 'linear-gradient(90deg, #64B5F6, #2196F3)',
                  }
                }}
              >
                Buy Now
                <ArrowForward sx={{ ml: 1 }} />
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#2196F3',
                  color: '#2196F3',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    borderColor: '#64B5F6',
                    background: 'rgba(33, 150, 243, 0.1)'
                  }
                }}
              >
                Learn More
              </Button>
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              gap: 4, 
              mt: 6,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: '#2196F3', fontWeight: 'bold' }}>
                  14K+
                </Typography>
                <Typography variant="body1" sx={{ color: '#999' }}>
                  Holders
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: '#2196F3', fontWeight: 'bold' }}>
                  $200k+
                </Typography>
                <Typography variant="body1" sx={{ color: '#999' }}>
                  Market Cap
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: '#2196F3', fontWeight: 'bold' }}>
                  2K+
                </Typography>
                <Typography variant="body1" sx={{ color: '#999' }}>
                  Community Members
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Video Section */}
      <Box sx={{ py: 12, background: '#0D0D0D' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            sx={{ 
              textAlign: 'center',
              mb: 8,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Watch Our Trailer
          </Typography>
          <Box sx={{ 
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%', // 16:9 Aspect Ratio
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 30px rgba(33, 150, 243, 0.2)',
          }}>
            <iframe
              src="https://www.youtube.com/embed/2lyCZnx71ps"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '16px',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box id="features" sx={{ py: 12, background: '#0D0D0D' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            sx={{ 
              textAlign: 'center',
              mb: 8,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Why Choose MrBeast Coin?
          </Typography>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
            gap: 4 
          }}>
            {[
              {
                title: 'Gaming Integration',
                description: 'Seamlessly integrated with popular games, offering unique in-game rewards and experiences'
              },
              {
                title: 'Community Rewards',
                description: 'Earn exclusive rewards through active participation and community engagement'
              },
              {
                title: 'Deflationary Model',
                description: 'Built-in burning mechanism ensures increasing value over time'
              },
              {
                title: 'Charitable Impact',
                description: 'portion of transactions supports global causes championed by MrBeast'
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                sx={{
                  background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.95) 100%)',
                  border: '1px solid rgba(33, 150, 243, 0.1)',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: 'rgba(33, 150, 243, 0.3)',
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <CheckCircle sx={{ color: '#2196F3' }} />
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#999' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Exclusive Rewards Section */}
  <Box sx={{ py: 12, background: '#080808' }}>
    <Container maxWidth="lg">
      <Typography 
        variant="h2" 
        sx={{ 
          textAlign: 'center',
          mb: 8,
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Exclusive Rewards Await
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{
            height: '100%',
            background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.95) 100%)',
            border: '1px solid rgba(33, 150, 243, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              borderColor: 'rgba(33, 150, 243, 0.3)',
            }
          }}>
            <CardContent sx={{ p: 4 }}>
              <EmojiEvents sx={{ color: '#2196F3', fontSize: 40, mb: 2 }} />
              <Typography variant="h5" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>
                VIP Entry
              </Typography>
              <Typography sx={{ color: '#999' }}>
                Get exclusive access to MrBeast challenges and gaming tournaments. Be first in line for epic gaming events!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{
            height: '100%',
            background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.95) 100%)',
            border: '1px solid rgba(33, 150, 243, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              borderColor: 'rgba(33, 150, 243, 0.3)',
            }
          }}>
            <CardContent sx={{ p: 4 }}>
              <LocalFireDepartment sx={{ color: '#2196F3', fontSize: 40, mb: 2 }} />
              <Typography variant="h5" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>
                Early Access
              </Typography>
              <Typography sx={{ color: '#999' }}>
                Get priority access to limited-edition MrBeast merch and special events before anyone else.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{
            height: '100%',
            background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.95) 100%)',
            border: '1px solid rgba(33, 150, 243, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              borderColor: 'rgba(33, 150, 243, 0.3)',
            }
          }}>
            <CardContent sx={{ p: 4 }}>
              <School sx={{ color: '#2196F3', fontSize: 40, mb: 2 }} />
              <Typography variant="h5" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>
                Special NFT Drops
              </Typography>
              <Typography sx={{ color: '#999' }}>
                Collect exclusive NFTs commemorating MrBeast's legendary gaming milestones.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>

  {/* Gamification Section */}
  <Box sx={{ py: 12, background: '#0D0D0D' }}>
    <Container maxWidth="lg">
      <Typography 
        variant="h2" 
        sx={{ 
          textAlign: 'center',
          mb: 8,
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Game On with Epic Features
      </Typography>

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 4
      }}>
        <Card sx={{
          background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.95) 100%)',
          border: '1px solid rgba(33, 150, 243, 0.1)',
          height: '100%'
        }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ color: '#2196F3', mb: 3, fontWeight: 'bold' }}>
              🏆 Leaderboard Glory
            </Typography>
            <Typography sx={{ color: '#999', mb: 2 }}>
              Compete to become a top coin holder or active community member. Climb the ranks and win amazing prizes!
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <Button href='https://x.com/mrbeast/status/1861121958122770860' variant="contained" sx={{
                background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #64B5F6, #2196F3)',
                }
              }}>
                View Leaderboard
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{
          background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.95) 100%)',
          border: '1px solid rgba(33, 150, 243, 0.1)',
          height: '100%'
        }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ color: '#2196F3', mb: 3, fontWeight: 'bold' }}>
              ✨ Quests & Rewards
            </Typography>
            <Typography sx={{ color: '#999', mb: 2 }}>
              Complete fun challenges like sharing content or holding coins to unlock exclusive rewards and bonuses.
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <Button href='https://t.me/+cJw4yIac1W40ZmU0' variant="contained" sx={{
                background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #64B5F6, #2196F3)',
                }
              }}>
                Start Quest
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  </Box>

  {/* ROI Showcase Section */}
  <Box sx={{ py: 12, background: '#080808' }}>
    <Container maxWidth="lg">
      <Typography 
        variant="h2" 
        sx={{ 
          textAlign: 'center',
          mb: 8,
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Watch Your Rewards Grow
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{
            height: '100%',
            background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.95) 100%)',
            border: '1px solid rgba(33, 150, 243, 0.1)',
          }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h4" sx={{ color: '#2196F3', mb: 2, fontWeight: 'bold' }}>
                +25%
              </Typography>
              <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                Today's Price Change
              </Typography>
              <Typography sx={{ color: '#999' }}>
                Watch your investment grow in real-time
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{
            height: '100%',
            background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.95) 100%)',
            border: '1px solid rgba(33, 150, 243, 0.1)',
          }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h4" sx={{ color: '#2196F3', mb: 2, fontWeight: 'bold' }}>
                1M+
              </Typography>
              <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                Burned Coins This Month
              </Typography>
              <Typography sx={{ color: '#999' }}>
                Increasing scarcity and value
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{
            height: '100%',
            background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.95) 100%)',
            border: '1px solid rgba(33, 150, 243, 0.1)',
          }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h4" sx={{ color: '#2196F3', mb: 2, fontWeight: 'bold' }}>
                150%
              </Typography>
              <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                Projected Annual ROI
              </Typography>
              <Typography sx={{ color: '#999' }}>
                For loyal holders
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>

  {/* Community Section */}
  <Box sx={{ py: 12, background: '#0D0D0D' }}>
    <Container maxWidth="lg">
      <Typography 
        variant="h2" 
        sx={{ 
          textAlign: 'center',
          mb: 8,
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Join Our Amazing Community
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{
            height: '100%',
            background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.95) 100%)',
            border: '1px solid rgba(33, 150, 243, 0.1)',
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <People sx={{ color: '#2196F3', fontSize: 40 }} />
                <Typography variant="h5" sx={{ color: '#fff', fontWeight: 'bold' }}>
                  Community Hub
                </Typography>
              </Box>
              <Typography sx={{ color: '#999', mb: 3 }}>
                Share your experience and connect with fellow holders through our vibrant community platforms.
              </Typography>
              <Button href='https://t.me/+cJw4yIac1W40ZmU0' variant="contained" sx={{
                background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #64B5F6, #2196F3)',
                }
              }}>
                Join Community
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{
            height: '100%',
            background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.95) 100%)',
            border: '1px solid rgba(33, 150, 243, 0.1)',
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Campaign sx={{ color: '#2196F3', fontSize: 40 }} />
                <Typography variant="h5" sx={{ color: '#fff', fontWeight: 'bold' }}>
                  Challenge Fund
                </Typography>
              </Box>
              <Typography sx={{ color: '#999', mb: 3 }}>
                Vote on exciting charity challenges and see your impact through detailed progress reports.
              </Typography>
              <Button href='https://www.youtube.com/channel/UCIPPMRA040LQr5QPyJEbmXA/videos' variant="contained" sx={{
                background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #64B5F6, #2196F3)',
                }
              }}>
                View Challenges
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>


      {/* Roadmap Section */}
      <Box id="roadmap" sx={{ py: 12, background: '#080808' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            sx={{ 
              textAlign: 'center',
              mb: 8,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #2196F3, #64B5F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Roadmap
          </Typography>
          
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: 4
          }}>
            {[
              {
                phase: 'Phase 1',
                title: 'Launch & Community',
                items: ['Token Launch', 'Community Building', 'Marketing Campaign']
              },
              {
                phase: 'Phase 2',
                title: 'Gaming Integration',
                items: ['Game Partnerships', 'In-Game Rewards', 'Tournament Platform']
              },
              {
                phase: 'Phase 3',
                title: 'Expansion',
                items: ['Major Exchange Listings', 'Mobile App', 'Charity Events']
              }
            ].map((phase, index) => (
              <Card
                key={index}
                sx={{
                  background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.95) 100%)',
                  border: '1px solid rgba(33, 150, 243, 0.1)',
                  borderRadius: 4,
                  height: '100%'
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#2196F3',
                      fontWeight: 'bold',
                      mb: 1
                    }}
                  >
                    {phase.phase}
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: '#fff',
                      fontWeight: 'bold',
                      mb: 3
                    }}
                  >
                    {phase.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {phase.items.map((item, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircle sx={{ color: '#2196F3', fontSize: 20 }} />
                        <Typography variant="body1" sx={{ color: '#999' }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}>
            <Typography variant="body2" sx={{ color: '#666' }}>
              © 2024 MrBeast Memecoin. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                href='https://twitter.com/MrBeast'
                size="small"
                sx={{ 
                  color: '#666',
                  '&:hover': { color: '#2196F3' }
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                href='https://t.me/+cJw4yIac1W40ZmU0'
                size="small"
                sx={{ 
                  color: '#666',
                  '&:hover': { color: '#2196F3' }
                }}
              >
                <Telegram />
              </IconButton>
              <IconButton 
                href='https://www.youtube.com/@MrBeastGaming'
                size="small"
                sx={{ 
                  color: '#666',
                  '&:hover': { color: '#FFD700' }
                }}
              >
                <YouTube />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}